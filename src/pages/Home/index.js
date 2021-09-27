import Header from "../../components/Header";
import Coments from "../../components/Coments";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Modal from "../../components/Modal";
import Tag from "../../components/Tag";
import { FeedContainer, GistIcon, Main, Post, FormNewQuestion } from "./styles";
import { useEffect, useState, useRef } from "react";
import { api } from "../../services/api";


function Home() {

    const [posts, setPosts] = useState([]);

    const loadPosts = async () => {
        try {

            const response = await api.get("/posts");

            setPosts(response.data);

        } catch (error) {
            console.error(error);
            alert("Ops, algo deu errado...");
        }
    }

    useEffect(() => {
        loadPosts();

        return () => {
            //onDestroy;
        }
    }, []);

    // const posts = [{
    //     author: {
    //         name: "Fulano",
    //     },
    //     created_at: "10/10/2021",
    //     title: "Este é um post sobre JS",
    //     description: "JS é uma linguagem de programação muito top",
    //     image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    //     gist: "https://github.com.br/",
    //     categories: [
    //         "JS", "Back-end", "Express"
    //     ],
    //     coments: [
    //         {
    //             author: {
    //                 name: "Ciclano",
    //             },
    //             created_at: "11/10/2021",
    //             description: "Realmente JS é muito legal"
    //         }
    //     ]
    // }];

    return (
        <>
            <Header />
            <Main>
                <nav>
                    Profile
                </nav>
                <FeedContainer >
                    {posts.map(post => <PostCard post={post} />)}
                </FeedContainer>
                <aside>
                    <button>
                        +
                    </button>
                </aside>
                <Modal title="teste">
                    <NewQuestion

                    />
                </Modal>
            </Main>
        </>
    );
}

function PostCard({ post }) {

    return (
        <Post>
            <header>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                <div>
                    <strong>
                        por {post.author.name}
                    </strong>
                    <p>
                        {post.created_at}
                    </p>
                </div>
                {post.gist && <GistIcon />}
            </header>
            <main>
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                </div>
                <img src={post.image} />
                <section>
                    {post.categories.map(category => <p>{category}</p>)}
                </section>
            </main>
            <footer>
                <h2>Comentários</h2>
                {post.coments.map(coment => <Coments coment={coment} />)}
            </footer>
        </Post>
    );
}

function NewQuestion({ handleReload, setIsLoading }) {
    const [newQuestion, setNewQuestion] = useState({
        title: "",
        description: "",
        gist: "",
    });

    const [image, setImage] = useState(null);

    const imageRef = useRef();


    const handleImage = (e) => {
        if (e.target.files[0]) {
            imageRef.current.src = URL.createObjectURL(e.target.files[0]);
            imageRef.current.style.display = "flex";
        } else {
            imageRef.current.src = "";
            imageRef.current.style.display = "none";
        }

        setImage(e.target.files[0]);
    };

    const handleInput = (e) => {
        setNewQuestion({ ...newQuestion, [e.target.id]: e.target.value });
    };

    const handleAddNewPost = async (e) => {
        e.preventDefault();

        let data = new FormData();

        data.append("title", newQuestion.title);
        data.append("description", newQuestion.description);
        data.append("gist", newQuestion.gist);

        data.append("image", image);

        await api.post("/posts", data, {
            headers: {
                "content-type": "multipart/form-data"
            }
        })
        
    };

    return (
        <FormNewQuestion onSubmit={handleAddNewPost}>
            <Input
                id="title"
                label="Título"
                value={newQuestion.title}
                handler={handleInput}
                minLength="5"
                required
            />
            <Input
                id="description"
                label="Descrição"
                value={newQuestion.description}
                handler={handleInput}
                minLength="10"
                required
            />
            <Input
                id="gist"
                label="Gist"
                value={newQuestion.gist}
                minLength="20"
                handler={handleInput}
            />
            <input type="file" onChange={handleImage} />
            <img alt="Pré-visualização" ref={imageRef} />
            <button>Enviar</button>
        </FormNewQuestion>
    );
}

export default Home;