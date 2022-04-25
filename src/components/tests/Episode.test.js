import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Episode from './../Episode';

const testEpisode = {
    id:1,
    name:'',
    image:'',
    season:1,
    number:1,
    summary:'modify the test data to display a specific summary statement',
    runtime:1
}

const nullImageEpisode = {
    id:1,
    name:'',
    image: null,
    season:1,
    number:1,
    summary:'modify the test data to display a specific summary statement',
    runtime:1
}

test("renders without error", () => {
    render(<Episode episode={testEpisode}/>)
 });

test("renders the summary test passed as prop", () => { 
    render(<Episode episode={testEpisode} />)
    const summary = screen.queryByText(/display/i)
    expect(summary).toBeInTheDocument();
    expect(summary).toBeTruthy();
    expect(summary).toHaveTextContent('display')
});

test("renders default image when image is not defined", () => {
    render(<Episode episode={nullImageEpisode}/>)
    const image = screen.queryByAltText('https://i.ibb.co/2FsfXqM/stranger-things.png')
    expect(image).toBeInTheDocument()
 });
