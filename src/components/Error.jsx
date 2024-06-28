import { Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineError } from 'react-icons/md'

const Error = ({error, texto}) => {
  return (
    <Flex align="center" color="red">
      <Text>{texto} </Text>
      <Text>{error}</Text>
    </Flex>
  )
}

export default Error