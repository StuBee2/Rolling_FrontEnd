import { useState } from "react";
import * as S from "./style";

export default function Test() {
    const [todoText,setTodoText] = useState("");
    const [cnt,setCnt] = useState(1)
    const [list,setList] = useState([
        {
            id:0,
            text:"밥먹기",
        }
    ]);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTodoText(e.target.value);
    };

    const handleKeyPress = (e:React.KeyboardEvent<HTMLInputElement> ) => {
        if(e.key === 'Enter') {
            if(todoText !== "") {
                const todo = list.concat({
                    id:cnt,
                    text:todoText,
                });
                setList(todo);
                setCnt(cnt+1);
                setTodoText("");
            }
            else {
                alert("할 일을 입력해주세요!");
            }
        }
    }

    return(
        <S.TestBoxContainer>
            <S.TestBox>
                <S.ListInput type="text" placeholder="할 일을 입력하세요" value={todoText} onChange={handleChange} onKeyPress={handleKeyPress}/>
                <S.ListContainer>
                    {
                        list.map((data)=>
                            <li key={data.id}>{data.text}</li>
                        )
                    }
                </S.ListContainer>
            </S.TestBox>
        </S.TestBoxContainer>
    );
}