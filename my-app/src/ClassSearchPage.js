// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import ClassPage from './ClassPage';
import { 
    Flex, 
    Stack, 
    Input,
    Text,
    Button 
} from '@chakra-ui/react';

function ClassSearchPage() {
  return (
    <div className="ClassSearchPage">
      <Navbar />
      <Flex direction={'column'} width='60vw' paddingLeft='3vw' paddingTop='2vw'>
        <Stack spacing={3} paddingBottom='1vw'>
            <Input placeholder='Search for a class' size='lg' />
        </Stack>
        <Stack spacing={3}>
            <Text fontWeight='bold'>
                Popular Classes
            </Text>
            <a href='/classPage/cs162'>
                <Button colorScheme='blue'>CS162: Operating Systems</Button>
            </a>
            <a href='/classPage/cs162'>
                <Button colorScheme='blue'>CS161: Computer Security</Button>
            </a><a href='/classPage/cs162'>
                <Button colorScheme='blue'>CS186: Internet Architecture</Button>
            </a>
        </Stack>
      </Flex>
    </div>
  );
}

export default ClassSearchPage;