import { Box, Button, ChakraProvider, Flex, Image, Text, Container } from '@chakra-ui/react'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'

import QuoteRight from './components/QuoteRight'
import QuoteLeft from './components/QuoteLeft'
import useHandlers from './hooks/useHandlers';


function App() {
  const { index, reviews, setReview, review, handlerNext, handlerPrev } = useHandlers()

  return (
    <ChakraProvider>
      <Box bg={'gray.200'}>
        <Container maxW='container.lg'>
          <Flex minH='100vh'>
            <Box w={768} m='auto' bg={'white'} borderWidth='1px' borderRadius='lg' borderColor='gray.200' p={8} boxShadow='sm'>
              <Text fontSize='4xl' textAlign={'center'} mb={8}>Our Reviews</Text>

              <Flex flexDir={'column'} alignItems="center" mb={8}>
                <Image
                  borderRadius='full'
                  boxSize='150px'
                  objectFit="cover"
                  src={review?.photo}
                  alt='Dan Abramov'
                  mb={2}
                  border='5px'
                  borderColor='teal.300'
                  borderStyle='solid'
                />
                <Text as='b' color='gray.700'>{review?.name}</Text>
                <Text color='gray.500' mb={2}>{review?.position}</Text>
                <Text fontSize='large' color='gray.800' textAlign={'center'}>
                  <QuoteLeft m='.5rem' />
                  {review?.review}
                  <QuoteRight m='.5rem' />
                </Text>
              </Flex>
              <Flex justifyContent={'center'} css={{ gap: '20px' }}>
                <Button leftIcon={<ArrowBackIcon />} colorScheme='teal' size='sm' onClick={handlerPrev}></Button>
                <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' size='sm' onClick={handlerNext}></Button>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>
    </ChakraProvider>
  )
}

export default App
