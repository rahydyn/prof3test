import { Input } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'


export function ObjectiveContents() {
    return (
        <>
            <Input placeholder='Basic usage' />
            <Box bg='white' w='100%' h='100%' p={4} color='tomato'>
                This is the Box
            </Box>
        </>
    )
}