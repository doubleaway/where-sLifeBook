import React from "react";
import styled from "styled-components";
//icons
import { FaUser } from "react-icons/fa"; //user
//import { TiBook } from "react-icons/ti";//library
import { LuBookCopy } from "react-icons/lu";
const Header = (login = false) => {
    const ButtonLogout = styled.button`
        padding: 8px 15px;
        border-radius: 5px;
        background-color: #green;
    `;
    //login에 따른 서브 메뉴 리스트
    const loginList = ["로그인", "회원가입"];
    const logoutList = ["님", <ButtonLogout>로그아웃</ButtonLogout>];
    //login에 따른 메인 메뉴 리스트
    const loginLinks = [<LuBookCopy />, <FaUser />];
    const logoutLinks = ["myPage", "logout"];

    const loginMenu = (listVal) => {
        const resultVal = listVal.map((x, i) => { return <li key={x + i}>{x}</li> })
        return resultVal;
    }

    const mainList = login ? loginMenu(loginList) : loginMenu(logoutList);
    const subList = login ? loginMenu(loginLinks) : loginMenu(logoutLinks);


    return (
        <header>
            <ul className="subMenu">
                {mainList}
            </ul>
            <ul className="mainMenu">
                <li className="logo">Where's Life Book</li>
                {subList}
            </ul>
        </header>
    )
}

export default Header;