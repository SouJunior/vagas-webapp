import Search from '../../../../assets/imgs/search.svg';
import Location from '../../../../assets/imgs/location.svg';

import styled from 'styled-components';

export const Container = styled.form`
    display: flex;
    align-items: center;
    gap: 16px;
    height: 100%;
`;

export const Input = styled.input`
    width: 256px;
    height: 45px;
    padding: 0 16px 0 44px;
    border: 1px solid #c1dfff;
    background: #eff3f9;
    background-position: left 16px center;
    background-repeat: no-repeat;
    border-radius: 42px;
    font-size: 14px;
    line-height: 120%;
    color: #666666;

    :focus {
        outline-color: #1165ba;
    }
`;

export const SearchJob = styled(Input)`
    background-image: url(${Search});
`;

export const LocationInput = styled(Input)`
    background-image: url(${Location});
`;

export const Button = styled.button`
    width: 116px;
    height: 45px;
    border: none;
    border-radius: 24px;
    background: #003986;
    font-family: 'Radio Canada';
    font-size: 14px;
    line-height: 140%;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        opacity: 0.8;
    }
`;
