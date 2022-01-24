import { render } from '@testing-library/react';
import { beforeEach } from 'jest-circus';
import { describe } from 'yargs';
import App from '../App';

//jest version of testing
describe('App', ()=>{
    beforeEach(()=>{
        render(<App />);
    });
});