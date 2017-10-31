import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

require('react-native-mock-render/mock');

Enzyme.configure({ adapter: new Adapter() });
