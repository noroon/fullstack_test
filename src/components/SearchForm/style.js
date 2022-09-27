import styled from 'styled-components';

import Button from './../common/Button';
import InputField from './../common/InputField';

import { secondary } from '../../style/custom.js';

export const FormContainer = styled.form`
  max-width: 500px;
  min-height: 300px;
  margin: 1rem auto;
  padding: 5rem;
  background-color: rgb(255, 230, 0);
  border: 0px solid;
  border-radius: 30% 70% 57% 43% / 35% 56% 44% 65%;
`;

export const InputGroup = styled.div`
  border-radius: 50px;
  border: 1px solid ${secondary};
  transition: all 250ms ease-in-out;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  margin-bottom: 2rem;
  background-color: white;
  display: flex;
  &:hover,
  &:focus {
    outline: 0;
    border: 1px solid transparent;
    border-bottom: 1px solid ${secondary};
    border-radius: 0;
  }
`;

export const InputButton = styled(Button)`
  min-width: 4rem;
  padding: 12px 24px;
  border-radius: 50px;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 18px 18px;
  background-position: center;
  background-color: transparent;
  border: 0px;
  &:focus {
    background-color: transparent;
    box-shadow: none;
  }
  &:hover {
    background-size: 22px 22px;
    background-color: transparent;
    outline: 0;
    border-radius: 0;
    box-shadow: none;
  }
`;

export const SearchInput = styled(InputField)`
  width: 100%;
  padding: 12px 24px;
  border-radius: 50px;
  font-size: 14px;
  line-height: 18px;
  color: ${secondary};
  border: none;
  background-color: transparent;
  &:hover {
    background-color: none;
    outline: 0;
    border-radius: 0;
    box-shadow: none;
  }
  &:focus,
  &:active {
    background-color: none;
    box-shadow: none;
  }
  &::placeholder {
    color: color(${secondary} a(0.8));
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    cursor: pointer;
    height: 20px;
    width: 20px;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23777'><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>");
  }
`;
