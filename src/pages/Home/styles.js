import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const GistIcon = styled(FaGithub)`
    font-size: 40px;
    
    cursor: pointer;
    transition: .2s;

    :hover{
        color: var(--primary);
    }
`;

export const Main = styled.main`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    padding-top: 60px;

    display: grid;
    grid-template-columns: 20% 60% 20%;

    > aside{
        display: flex;
        flex-direction: row;
        justify-content: center;
        > button {
            margin-top: 10px;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-color: var(--primary);
            border: none;
            color: white;
            font-size: 48px;
            box-shadow: 0px 0px 10px #0009;

            :hover{
                box-shadow: 0px 0px 40px #0009;
            }
        }

    } 
`;

export const FeedContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;

    overflow-y: auto;
    
    gap: 10px;
    padding: 10px;

    border: 1px dashed gray;
`;

export const Post = styled.article`
    width: 80%;
    padding: 20px;

    box-shadow: 0px 10px 10px rgba(0,0,0,0.25);

    > header {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;

        > img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
        }

        > div {
            gap: 5px;    
            font-size: 18px;

            > p {
                font-size: 14px;
                color: var(--textGray);
            }
        }
    }

    > main {
        margin-top: 10px;
        > div {
            > h1 {
                font-size: 22px;
            }

            > p{
                margin-top: 5px;
                padding: 10px 0px 10px 12px;
                
                font-size: 18px;
                border-left: 2px solid var(--primary);
            }
        }

        > img {
            width: calc(100% + 40px);
            margin-left: -20px;
            margin-top: 10px;
        }
        
        > section{
            margin-top: 10px;
            display: flex;
            gap: 5px;

            > p {
                padding: 5px;
                box-shadow: 0px 0px 10px rgba(0,0,0,0.25);
            }
        }
    }

    > footer{

        > h2{
            margin-top: 10px;
            font-size: 18px;
            transition: 0.2s;
            cursor: pointer;

            :hover{
                color: var(--primary);
            }
        }
    }
`;

export const FormNewQuestion = styled.form`
  min-width: 300px;
  width: 450px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  > div {
    display: flex;
    flex-wrap: wrap;
  }

  > img {
    align-self: center;
    max-width: 40%;
    display: none;
  }
`;