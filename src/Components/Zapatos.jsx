import React, {useState,} from 'react';
import {Box,Image,HStack} from '@chakra-ui/react';
import { CardGroup } from 'react-bootstrap';


  
export default function ProductSimple(props) {
		let [contador, setContador] = useState(0);
	
		
		return (
		
			<div >
				
  <CardGroup>
<HStack spacing='2px'>
    <Box maxW='sm' borderWidth='2px' borderRadius='lg' overflow='hidden'>
      <Image src={props.imagen} alt={props.producto} />

      <Box p='5' alignItems='Center'>
        <Box display='flex' alignItems='Center'>
      
          <Box
            color='gray.600'
            fontWeight='bold'
            letterSpacing='wide'
            fontSize='lg'
            textTransform='uppercase'
            ml='1'
          >
            {props.producto} 
          </Box>
        </Box>
		<Box>
          {props.precio}
          <Box as='span' color='black.700' fontSize='md' align='center'>
           
          </Box>
        </Box>

        <Box display='flex' mt='1' alignItems='center'>
		
		<Box as='button' ml='1' borderRadius='md' bg='red' color='white' px={5} h={9} alignItem='Center'  onClick={() => setContador(contador + 1)}>
  			Comprar
		</Box>
          
        </Box>
      </Box>
	  
    </Box>
	</HStack>
	
	</CardGroup>
	
		</div>
		);
	}
