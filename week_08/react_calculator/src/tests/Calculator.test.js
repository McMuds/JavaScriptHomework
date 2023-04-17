import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should be able to add two numbers', () => {
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const button_plus = container.getByTestId('operator-add');
    const button_equals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button1);
    expect(runningTotal.textContent).toEqual('1')
    fireEvent.click(button_plus);
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4')
    fireEvent.click(button_equals);
    expect(runningTotal.textContent).toEqual('5')
  })
  
  it('should be able to subtract one number from another', () => {
    const button7 = container.getByTestId('number7');
    const button4 = container.getByTestId('number4');
    const button_subtract = container.getByTestId('operator-subtract');
    const button_equals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button7);
    expect(runningTotal.textContent).toEqual('7')
    fireEvent.click(button_subtract);
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4')
    fireEvent.click(button_equals);
    expect(runningTotal.textContent).toEqual('3')
  })
  
  it('should be able to multiply one number with another', () => {
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const button_multiply = container.getByTestId('operator-multiply');
    const button_equals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button3);
    expect(runningTotal.textContent).toEqual('3')
    fireEvent.click(button_multiply);
    fireEvent.click(button5);
    expect(runningTotal.textContent).toEqual('5')
    fireEvent.click(button_equals);
    expect(runningTotal.textContent).toEqual('15')
  })
  
  it('should be able to divide one number by another', () => {
    const button7 = container.getByTestId('number7');
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button_divide = container.getByTestId('operator-divide');
    const button_equals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button2);
    expect(runningTotal.textContent).toEqual('2')
    fireEvent.click(button1);
    expect(runningTotal.textContent).toEqual('21')
    fireEvent.click(button_divide);
    fireEvent.click(button7);
    expect(runningTotal.textContent).toEqual('7')
    fireEvent.click(button_equals);
    expect(runningTotal.textContent).toEqual('3')
  })
  
  it('should be able to concatenate multiple number clicks', () => {
    const button7 = container.getByTestId('number7');
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button3 = container.getByTestId('number3');
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button2);
    expect(runningTotal.textContent).toEqual('2')
    fireEvent.click(button1);
    expect(runningTotal.textContent).toEqual('21')
    fireEvent.click(button7);
    expect(runningTotal.textContent).toEqual('217')
    fireEvent.click(button3);
    expect(runningTotal.textContent).toEqual('2173')
  })
  
  it('should be able to concatenate multiple operator clicks', () => {
    const button5 = container.getByTestId('number5');
    const button_minus = container.getByTestId('operator-subtract');
    const button_multiply = container.getByTestId('operator-multiply');
    const button_divide = container.getByTestId('operator-divide');
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button5);
    expect(runningTotal.textContent).toEqual('5')
    fireEvent.click(button_multiply);
    fireEvent.click(button_minus);
    expect(runningTotal.textContent).toEqual('25')
    fireEvent.click(button_divide);
    expect(runningTotal.textContent).toEqual('-20')
  })

  it('should be able to use the clear button', () => {
    const button7 = container.getByTestId('number7');
    const button4 = container.getByTestId('number4');
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const button_multiply = container.getByTestId('operator-multiply');
    const button_subtract = container.getByTestId('operator-subtract');
    const button_equals = container.getByTestId('operator-equals');
    const clear = container.getByTestId('clear')
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button7);
    expect(runningTotal.textContent).toEqual('7')
    fireEvent.click(button_subtract);
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4')
    fireEvent.click(clear);
    expect(runningTotal.textContent).toEqual('0')
    fireEvent.click(button3);
    expect(runningTotal.textContent).toEqual('3')
    fireEvent.click(button_multiply);
    fireEvent.click(button5);
    expect(runningTotal.textContent).toEqual('5')
    fireEvent.click(button_equals);
    expect(runningTotal.textContent).toEqual('15')
  })
})
