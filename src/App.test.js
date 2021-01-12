import { render, screen, unmountComponentAtNode, act, fireEvent, within, getNodeText } from '@testing-library/react';
import App from './App';

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = render(<App />)
});

afterEach(() => {
  // cleanup on exiting
  container = null;

});

function getrandomNumber() {
  return Math.floor(Math.random() * 10000);
}

test('check Bmi functional working', () => {

  const massValue = getrandomNumber();
  const heightValue = getrandomNumber();
  const outputValue = massValue / (heightValue*heightValue);

  console.log("inputs", massValue, heightValue, outputValue)

  const massInputElement = container.getByLabelText('mass-input')
  fireEvent.change(massInputElement, { target: { value: massValue } })

  const heightInputElement = container.getByLabelText('height-input')
  fireEvent.change(heightInputElement, { target: { value: heightValue } })


  const bmiButtonElement = container.getByLabelText('bmi-button')
  const bmiOutputElement = container.getByLabelText('bmi-output')

  fireEvent.click(bmiButtonElement)

  const output = getNodeText(bmiOutputElement)
  console.log("outputs", output, outputValue.toString())
  expect(output).toEqual(outputValue.toString())


});

