import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';

describe('Tests for CounterApp.js', () => {
  let wrapper = shallow(<CounterApp />);
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test('Should show <CounterApp /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should show 100 as the default value', () => {
    const value = 100;

    const wrapper = shallow(<CounterApp value={value} />);
    const textValue = wrapper.find('h2').text();
    expect(textValue).toBe(`${value}`);
  });

  test('Should increment the counter +1 with the +1 button', () => {
    wrapper.find('button').at(0).simulate('click');
    const counterText = wrapper.find('h2').text();

    expect(counterText).toBe('11');
  });

  test('Should reset the counter to 10', () => {
    const defaultValue = 100;
    const wrapper = shallow(<CounterApp value={defaultValue} />);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    const counterText = wrapper.find('h2').text();

    expect(counterText).toBe(`${defaultValue}`);
  });

  test('Should decrement the counter -1 with the -1 button', () => {
    wrapper.find('button').at(2).simulate('click');
    const counterText = wrapper.find('h2').text();

    expect(counterText).toBe('9');
  });
});
