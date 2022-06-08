import React from "react";
import styled from "styled-components";

export function Login() {
    return (
        <DivHome>
            <BoxDeLogin>
                <BoxTitulo
                />
                <TheBigLogin/>
                <InputEmail/>
                <ButtonNext/>
            </BoxDeLogin>
        </DivHome>

    )
}

const DivHome = styled.div`
  position: center;

`
const BoxDeLogin = styled.header`
  width: 1500px;
  height: 854px;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  margin: auto;
  border-radius: 10px;
  background-color: #E9EBED;
`
const BoxTitulo = styled.button`
  width: 400px;
  height: 100px;
  position: absolute;
  bottom: 707px;
  right: 50px;
  top: 90px;
  left: 200px;
  box-shadow: 7px 7px 13px 0 #000000;
  background-color: #E9EBED;

  font-size: 40px;
`
const InputEmail = styled.input`
  width: 480px;
  height: 60px;
  position: absolute;
  bottom: 356px;
  top: 438px;
  right: 90px;
  left: 200px;
  box-shadow: 7px 7px 13px 0 #000000;
  background-color: #E9EBED;

  font-size: 20px;
`
const TheBigLogin = styled.text`
  font-size: 60px;
  
`
const ButtonNext = styled.button`
  width: 185px;
  height: 55px;
  background-color: black;
  position: absolute;
  right: 810px;
  top: 540px;

`


