import { 
    Flex, 
    Grid,
    GridItem,
    Box,
    IconButton,
    Text, 
    grid
} from '@chakra-ui/react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import axios from 'axios';
import { useEffect, useState } from 'react';

let gridValuesInitial = []
for (let i = 0; i < 120; i++) {
  gridValuesInitial[i] = 0;
}
export default function ClassPage() {

  const [gridValues, setGridValues] = useState(gridValuesInitial);

  useEffect(() => {
    function populateGrid(response) {
      console.log(response)
      let data = response.data
      let tempGridValues = [...gridValues]
      for (let i = 0; i < data.length; i++) {
        let ohScheduleEntry = data[i]
        let hms = ohScheduleEntry[4]
        let target = new Date("1970-01-01T" + hms);
        console.log("Hours:" ,target.getHours())
        let hour = target.getHours()
        let gridValuesIndexStart = (2*(hour - 8) * 5 ) + ohScheduleEntry[3]
        hms = ohScheduleEntry[5]
        target = new Date("1970-01-01T" + hms);
        hour = target.getHours() + 1
        let gridValuesIndexEnd = (2*(hour - 8) * 5 ) + ohScheduleEntry[3]
        for (let j = gridValuesIndexStart; j < gridValuesIndexEnd; j = j + 5) {
          tempGridValues[j] = 1
        }
        //populate actual oh coloring/use data
      }
      setGridValues(tempGridValues)
      console.log('gridvalues', gridValues)
    }
    //Make a request for oh schedule given a class id
    axios.get('http://127.0.0.1:5000/schedule/cs162')
      .then(function (response) {
        // handle success
        console.log('getting a response')
        populateGrid(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [])


  

  

    return (
        <Flex direction={'column'} w='100vw' h='100vh'>
            <Navbar/>
            <Flex color='black'>
                <Sidebar/>
                {/* <Grid column={5} row={25}> */}
                <Flex marginTop='15px'>
                  <Grid w='5vw' h='80vw' gridTemplateColumns="repeat(1, 1fr)" columnGap="1" padding="0px" alignContent='flex-start' 
                  marginRight='0px' marginLeft='10px'>
                    <Box w='100%' h='27px' text>
                    </Box>
                    {
                        Array.from({length:8}).map((_, index) => (
                          <Box w='100%' h='27px' key={index}>
                            {(index % 2 === 0) ? 
                              <Text marginTop='-10px' fontSize='small'>
                                {(Math.floor(index / 2)) + 8}:00 AM
                            </Text>
                            :
                            <Text marginTop='-10px' fontSize='small'>
                            {/* {(Math.floor(index / 2)) + 8}:30 AM */}
                            </Text> 
                            }
                        </Box>
                      ))
                    }
                    <Box w='100%' h='27px'>
                      <Text marginTop='-10px' fontSize='small'>
                        12:00 PM
                      </Text>
                    </Box>
                    <Box w='100%' h='27px'>
                      <Text marginTop='-10px' fontSize='small'>
                        {/* 12:30 PM */}
                      </Text>
                    </Box>
                    {
                        Array.from({length:15}).map((_, index) => (
                          <Box w='100%' h='27px' key={index}>
                            {(index % 2 === 0) ? 
                              <Text marginTop='-10px' fontSize='small'>
                                {(index / 2) + 1}:00 PM
                            </Text>
                            :
                            <Text marginTop='-10px' fontSize='small'>
                            {/* {(Math.floor(index / 2) + 1)}:30 PM */}
                            </Text> 
                            }
                        </Box>
                      ))
                    }
                  </Grid>
                  <Grid w='75vw' h='80vh' gridTemplateColumns="repeat(5, 1fr)" columnGap="1" padding="0px" alignContent='flex-start' 
                  paddingLeft='0px' paddingRight="30px">
                    <Box w='100%' h='27px' fontWeight='bold'>
                      <Text align='center'>
                        Monday
                      </Text>
                    </Box>
                    <Box w='100%' h='27px' fontWeight='bold'>
                    <Text align='center'>
                        Tuesday
                      </Text>
                    </Box>
                    <Box w='100%' h='27px' fontWeight='bold'>
                    <Text align='center'>
                        Wednesday
                      </Text>
                    </Box>
                    <Box w='100%' h='27px' fontWeight='bold'>
                    <Text align='center'>
                        Thursday
                      </Text>
                    </Box>
                    <Box w='100%' h='27px' fontWeight='bold'>
                    <Text align='center'>
                        Friday
                      </Text>
                    </Box>
                      {
                        Array.from({length:120}).map((_, index) => {
                          if (gridValues[index] === 1) {
                            return <Box w='100%' h='27px' bg='gray.200' border='1px' borderColor='gray.200' key={index}/>
                          } else {
                            return <Box w='100%' h='27px' bg='white.100' border='1px' borderColor='gray.200' key={index}/>
                          }
                      })
                      }
                  </Grid>
                 </Flex>
            </Flex>
        </Flex>
    )
}