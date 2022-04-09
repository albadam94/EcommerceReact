import React, {useState,} from 'react';
import {Box,Center,useColorModeValue,Heading,Text,Stack,Image,} from '@chakra-ui/react';
import { Button, Spacer } from '@chakra-ui/react'

  
export default function ProductSimple(props) {
		let [contador, setContador] = useState(0);
	
		
		return (
		
			<div>
		<Center py={20}>
			<Box role={"group"} p={10} maxW={"350px"} w={"full"} bg={useColorModeValue("white", "gray.500")} boxShadow={"2xl"} rounded={"xl"} pos={"relative"} zIndex={1}>
			<Box rounded={"md"} mt={-10} pos={"relative"} height={"230px"} _after={{ transition: "all .4s ease", content: '""', w: "full", h: "full", pos: "absolute", top: 5, left: 0,
				backgroundImage: `url($"${props.imagen}")`, filter: "blur(15px)", zIndex: -1, }} _groupHover={{ _after: { filter: "blur(20px)",},}}>
				<Image rounded={"lg"} height={240} width={282} objectFit={"cover"} src={props.imagen} />
			</Box>
			<Stack pt={10} align={"center"}>
				<Heading
				fontSize={"2xl"}
				fontFamily={"body"}
				fontWeight={600}
				producto={props.producto}
				>
				{props.producto}
				</Heading>
				<Stack direction={"column"} align={"center"}>
				<Text fontWeight={800} fontSize={"xl"} precio={props.precio}>
					{"$" + props.precio}
				</Text>
				<Spacer></Spacer>
				
				<Button onClick={( )=>setContador(contador+1 )} className="Comprar" colorScheme="red" size="md" >
					COMPRAR
				</Button>
				</Stack>
			</Stack>
			</Box>
		</Center>
		</div>
		);
	}
