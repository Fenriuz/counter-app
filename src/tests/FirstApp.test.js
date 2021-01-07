import FirstApp from '../FirstApp';
import { shallow } from 'enzyme';

describe('Tests for <FirstApp />', () => {
  //test('Show the message "Hello, I am Alex"', () => {
  //const greeting = 'Hello, I am Alex';
  //const { getByText } = render(<FirstApp greeting={greeting} />);
  //expect(getByText(greeting)).toBeInTheDocument();
  //});

  test('Should show <FirstApp /> correctly', () => {
    const greeting = 'Hello, I am Alex';
    const wrapper = shallow(<FirstApp greeting={greeting} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('Should show the subtitle sent by the props', () => {
    const greeting = 'Hello, I am Alex';
    const subtitle = 'I am a subtitle';
    const wrapper = shallow(
      <FirstApp greeting={greeting} subtitle={subtitle} />
    );

    const textParagraph = wrapper.find('p').text();
    expect(textParagraph).toBe(subtitle);
  });
});
