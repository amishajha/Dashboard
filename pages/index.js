
import { Text } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import { ChevronLeftIcon } from "@chakra-ui/icons"
import {ChevronRightIcon} from "@chakra-ui/icons"
import { SimpleGrid } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { Checkbox, CheckboxGroup } from "@chakra-ui/react"
import {ChevronDownIcon} from "@chakra-ui/icons"

import {HamburgerIcon} from "@chakra-ui/icons"
import { TimeIcon} from "@chakra-ui/icons"
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { IconButton } from "@chakra-ui/react"
import SmallAddIcon from "@chakra-ui/icons"

export default function Home() {

  return (
    <>
   
 <SimpleGrid columns={2} spacingX={10} spacingY="20px">
  <Box   bg ="linear-gradient(to left, #ffe1e1, #ffdde1) " ml="80px"  mt="12px" width="990px" height="130px" borderRadius="20px">

  <Text
  bgGradient="linear(to-l, #7928CA,#FF0080)"
  bgClip="text"
  fontSize="2xl"
  ml="20px"

  color="#883F57"
  fontWeight="extrabold"
  fontFamily="cursive"
>
  Hello Dhruv!
</Text>

<Text
  bgGradient="linear(to-l, #7928CA,#FF0080)"
  bgClip="text"
  fontSize="1xl"
  ml="20px"
  mt="29px"
  color="#9C536B"
  fontWeight="extrabold"
  fontFamily="cursive"
>
 Welcome to your daily event calender.Here you can <br></br>see all the upcoming events,meetings and create new events
</Text>


<Box  width="900px" bg="white" mt="22px" display="flex" flexDir="row" >
<Text
color= "black"
fontFamily="cursive"
fontWeight="extrabold"
mt="30px"
fontSize="2xl"
>
  Timeline

</Text>
<ButtonGroup variant="outline" mt="30px"  width="20px"ml="150px"spacing="6">
  <Button colorScheme="#ffdde1">< ChevronLeftIcon/></Button>
  
</ButtonGroup>

<Text
color= "black"
fontFamily="cursive"
fontWeight="extrabold"
mt="38px"
ml="25px"
fontSize="xs"
color="#883F57"
>
Monday 10december 2020

</Text>


<ButtonGroup variant="outline" mt="30px"  width="20px"ml="10px"spacing="6">
  <Button colorScheme="#ffdde1">< ChevronRightIcon/></Button>
  
</ButtonGroup>

<Box bg="#FFFAFA" height="180px" ml="40px" mt="20px" width="120px" shadow="xl"  display="flex" flexDir="column" >
<Checkbox color="#883F57"colorScheme="pink" isenabled>All</Checkbox>
<Checkbox color="#883F57" colorScheme="pink" isenabled>Reminders</Checkbox>
<Checkbox color="#883F57" colorScheme="pink" isenabled>Activities</Checkbox>
<Checkbox color="#883F57" colorScheme="pink" isenabled>Classes</Checkbox>
<Checkbox color="#883F57" colorScheme="pink" isenabled>Exams</Checkbox>
<Checkbox color="#883F57" colorScheme="pink"  isenabled>Assignments</Checkbox>
<Checkbox color="#883F57" colorScheme="pink" isenabled>Happenings</Checkbox>


</Box>
<Button  rightIcon={<ChevronDownIcon />}  color="#883F57" leftIcon={<HamburgerIcon/>} ml="50px" variant="outline" ml="20px"mt="20px">
    Day
  </Button>

</Box>



<Box bg="white" height="90px" mt="4px" ml="40px" borderRadius="20px" display="flex" flexDirection="row" >

  
<Box bg="#ffdde1"  height="90px" width="50px" mt="10px" ml="40px" borderRadius="10px" display="flex" flexDirection="column" >
<Text
  bgGradient="linear(to-l, #7928CA,#FF0080)"
  bgClip="text"
  fontSize="1xl"
  ml="10px"
  mt="29px"
  color="#883F57"
  fontWeight="extrabold"
  fontFamily="cursive"
>

  Mon
</Text>

<Text
  bgGradient="linear(to-l, #7928CA,#FF0080)"
  bgClip="text"
  fontSize="1xl"
  ml="10px"
  mt="10px"
  color="#883F57"

  fontFamily="cursive"
>

  11
</Text>
 </Box>
 <Box   height="90px" width="50px" mt="10px" ml="40px" borderRadius="10px" display="flex" flexDirection="column" >
<Text
  bgGradient="linear(to-l, #7928CA,#FF0080)"
  bgClip="text"
  fontSize="1xl"
  ml="10px"
  mt="29px"
  color="#883F57"
  fontWeight="extrabold"
  fontFamily="cursive"
>

  Tue
</Text>

<Text
  bgGradient="linear(to-l, #7928CA,#FF0080)"
  bgClip="text"
  fontSize="1xl"
  ml="10px"
  mt="10px"
  color="#883F57"

  fontFamily="cursive"
>

  12
</Text>
 </Box>


 <Box   height="90px" width="50px" mt="10px" ml="40px" borderRadius="10px" display="flex" flexDirection="column" >
<Text
  bgGradient="linear(to-l, #7928CA,#FF0080)"
  bgClip="text"
  fontSize="1xl"
  ml="10px"
  mt="29px"
  color="#883F57"
  fontWeight="extrabold"
  fontFamily="cursive"
>

  wed
</Text>

<Text
  bgGradient="linear(to-l, #7928CA,#FF0080)"
  bgClip="text"
  fontSize="1xl"
  ml="10px"
  mt="10px"
  color="#883F57"

  fontFamily="cursive"
>

  13
</Text>
 </Box>
 <Box   height="90px" width="50px" mt="10px" ml="40px" borderRadius="10px" display="flex" flexDirection="column" >
<Text
  bgGradient="linear(to-l, #7928CA,#FF0080)"
  bgClip="text"
  fontSize="1xl"
  ml="10px"
  mt="29px"
  color="#883F57"
  fontWeight="extrabold"
  fontFamily="cursive"
>

  Thur
</Text>

<Text
  bgGradient="linear(to-l, #7928CA,#FF0080)"
  bgClip="text"
  fontSize="1xl"
  ml="10px"
  mt="10px"
  color="#883F57"

  fontFamily="cursive"
>

  14
</Text>
 </Box>
 <Box   height="90px" width="50px" mt="10px" ml="40px" borderRadius="10px" display="flex" flexDirection="column" >
<Text
  bgGradient="linear(to-l, #7928CA,#FF0080)"
  bgClip="text"
  fontSize="1xl"
  ml="10px"
  mt="29px"
  color="#883F57"
  fontWeight="extrabold"
  fontFamily="cursive"
>

  Fri
</Text>

<Text
  bgGradient="linear(to-l, #7928CA,#FF0080)"
  bgClip="text"
  fontSize="1xl"
  ml="10px"
  mt="10px"
  color="#883F57"

  fontFamily="cursive"
>

  15
</Text>
 </Box>
 <Box   height="90px" width="50px" mt="10px" ml="40px" borderRadius="10px" display="flex" flexDirection="column" >
<Text
  bgGradient="linear(to-l, #7928CA,#FF0080)"
  bgClip="text"
  fontSize="1xl"
  ml="10px"
  mt="29px"
  color="#883F57"
  fontWeight="extrabold"
  fontFamily="cursive"
>

  Sat
</Text>

<Text
  bgGradient="linear(to-l, #7928CA,#FF0080)"
  bgClip="text"
  fontSize="1xl"
  ml="10px"
  mt="10px"
  color="#883F57"

  fontFamily="cursive"
>

  15
</Text>
 </Box>
 <Box   height="90px" width="50px" mt="10px" ml="40px" borderRadius="10px" display="flex" flexDirection="column" >
<Text
  bgGradient="linear(to-l, #7928CA,#FF0080)"
  bgClip="text"
  fontSize="1xl"
  ml="10px"
  mt="29px"
  color="red"
  fontWeight="extrabold"
  fontFamily="cursive"
>

  Sun
</Text>

<Text
  bgGradient="linear(to-l, #7928CA,#FF0080)"
  bgClip="text"
  fontSize="1xl"
  ml="10px"
  mt="10px"
  color="red"

  fontFamily="cursive"
>

  10
</Text>
 </Box>


</Box>

<Box height="430px" width="800px" mt="12px"  boxShadow="2xl"bg="white" borderRadius="16px" display="flex" flexDir="row">

<Box height= "300px"width="130px" display="flex" flexDirection="column">
<Text
 
  bgClip="text"
  fontSize="sm"
  color="#9C536B"
  fontWeight="light"
  mt="6px"
  ml="6px"
  fontFamily="cursive"
>

  9:00 AM
</Text>


<Text
 
  bgClip="text"
  fontSize="sm"
  color="#9C536B"
  fontWeight="light"
  mt="56px"
  ml="6px"
  fontFamily="cursive"
>

  10:00 AM
</Text>

<Text
 
  bgClip="text"
  fontSize="sm"
  color="#9C536B"
  fontWeight="light"
  mt="56px"
  ml="6px"
  fontFamily="cursive"
>

  11:00 AM
</Text>

<Text
 
  bgClip="text"
  fontSize="sm"
  color="#9C536B"
  fontWeight="light"
  mt="72px"
  ml="6px"
  fontFamily="cursive"
>

  12:00 AM
</Text>



<Text
 
  bgClip="text"
  fontSize="sm"
  color="#9C536B"
  fontWeight="light"
  mt="58px"
  ml="6px"
  fontFamily="cursive"
>

  1:00 pM
</Text>

<Text
 
  bgClip="text"
  fontSize="sm"
  color="#9C536B"
  fontWeight="light"
  mt="58px"
  ml="6px"
  fontFamily="cursive"
>

  2:00 PM
</Text>
</Box>
<Box height="280px" width="200px" bg="linear-gradient(to left, #ffe1e1, #ffdde1)" mt="3px" borderRadius="16px">
<Text
 
  bgClip="text"
  fontSize="sm"
  color="black"
  fontWeight="light"
  display="flex"
  justifyContent="center"
  marginTop="100px"
  
  fontFamily="cursive"
>

  Developers Meet
</Text>

<Text
 
  bgClip="text"
  fontSize="sm"
  color="black"
  fontWeight="light"
  display="flex"
  justifyContent="center"
  marginTop="10px"
  
  fontFamily="cursive"
>

  9-12pm
</Text>

  </Box>


  <Box height="260px" width="180px" bg="lightblue" mt="80px" ml="12px" borderRadius="16px">
<Text
 
  bgClip="text"
  fontSize="sm"
  color="black"
  fontWeight="light"
  display="flex"
  justifyContent="center"
  marginTop="100px"
  
  fontFamily="cursive"
>
Project Review Meet
</Text>

<Text
 
  bgClip="text"
  fontSize="sm"
  color="black"
  fontWeight="light"
  display="flex"
  justifyContent="center"
  marginTop="10px"
  
  fontFamily="cursive"
>

10-1PM
</Text>

  </Box>


  <Box height="160px" width="270px" bg="#EE82EE" mt="20px" ml="12px" mr="10px"borderRadius="16px">
<Text
 
  bgClip="text"
  fontSize="sm"
  color="black"
  fontWeight="light"
  display="flex"
  justifyContent="center"
  marginTop="60px"
  
  fontFamily="cursive"
>
Data Structures and Algorithm
</Text>

<Text
 
  bgClip="text"
  fontSize="sm"
  color="black"
  fontWeight="light"
  display="flex"
  justifyContent="center"
  marginTop="10px"
  
  fontFamily="cursive"
>

9-11PM
</Text>

  </Box>
</Box>



  </Box>


  <Box ml="400px" bg="linear-gradient(to left, #ffe1e1, #ffdde1) " display="flex" flexDir="column" mt="10px" borderRadius="20px" width="290px" height="880px" >
 <Box  width="290px" height="90px" display="flex" flexDir="row" >
  <Text
  bgGradient="linear(to-l, #7928CA,#FF0080)"
  bgClip="text"
  fontSize="1xl"
  ml="20px"
  mt="29px"
  color="black"
  fontWeight="extrabold"
  fontFamily="cursive"
>

  Events
</Text>
<Text
  bgGradient="linear(to-l, #7928CA,#FF0080)"
  bgClip="text"
  fontSize="1xl"
  ml="73px"
  mt="29px"
  color="blue"
  
  fontWeight="extrabold"
  fontFamily="cursive"
>

  View All
</Text>

<Button  bg="#883F57" color="white" ml="10px" mt="20px">
+
  </Button>
</Box>

<Box  width="290px" height="40px" display="flex" flexDir="row" >
<Button bg="#FFC0CB" border="none" ml="10px" size="md" width="80px"variant="ghost"  color="#9C536B">
    Activities
  </Button>
  <Button bg="#ffdde1" border="none" ml="26px" size="md" width="80px" color="#9C536B"variant="ghost" ml="40px">
    Reminders
  </Button>
  </Box>

  <Text
  bgGradient="linear(to-l, #7928CA,#FF0080)"
  bgClip="text"
  fontSize="xs"
  ml="20px"
  mt="20px"
  color="#9C536B"
  
  fontWeight="extrabold"
  fontFamily="cursive"
>

Monday 10december 2020
</Text>

<Box maxW="sm" borderWidth="1px" borderRadius="12px" height="130px" overflow="hidden" bg="#d4dcf2" mt="4px"ml="20px" width= "240px"
>
        
        
          <Text color="black" fontSize="sm" fontWeight="bold" mt="4px" >
            BrainStoring Session with UI Team
          </Text>
        
          <Text fontSize="sm">
            Small description about the team
          </Text>
         <Box height="40px"  width="200px"  display="flex" flexdir="row">
         <LocationOnIcon style={{ color:"blue" ,marginTop:"2px"}}/>

          <Text m="1" color="blue" >
        Location
         </Text>
 
      </Box>
      <Box height="30px" width="200px" display="flex" flexdir="row">
      <TimeIcon ml="10px" mt="9px"/>
      <Text m="1"  >
        10-11AM
         </Text>

      </Box>
      
    
          
    </Box>

    <Box maxW="sm" borderWidth="1px" borderRadius="12px" height="130px" overflow="hidden" bg="	#add8e6" mt="10px"ml="20px" width= "240px"
>
          <Text color="black" fontSize="sm" fontWeight="bold" mt="4px" >
            BrainStoring Session with UI Team
          </Text>
        
          <Text fontSize="sm">
            Small description about the team
          </Text>
         <Box height="40px"  width="200px"  display="flex" flexdir="row">
         <LocationOnIcon style={{ color:"blue" ,marginTop:"2px"}}/>

          <Text m="1" color="blue" >
        Location
         </Text>
 
      </Box>
      <Box height="30px" width="200px" display="flex" flexdir="row">
      <TimeIcon ml="10px" mt="9px"/>
      <Text m="1"  >
        10-11AM
         </Text>

      </Box>
    </Box>
    <Box maxW="sm" borderWidth="1px" borderRadius="12px" overflow="hidden" height="130px" bg="#e6bbad" mt="10px"ml="20px" width= "240px"
>
       
<Text color="black" fontSize="sm" fontWeight="bold" mt="4px" >
            BrainStoring Session with UI Team
          </Text>
        
          <Text fontSize="sm">
            Small description about the team
          </Text>
         <Box height="40px"  width="200px"  display="flex" flexdir="row">
         <LocationOnIcon style={{ color:"blue" ,marginTop:"2px"}}/>

          <Text m="1" color="blue" >
        Location
         </Text>
 
      </Box>
      <Box height="30px" width="200px" display="flex" flexdir="row">
      <TimeIcon ml="10px" mt="9px"/>
      <Text m="1"  >
        10-11AM
         </Text>

      </Box>
    </Box>

  </Box>


  





  

  
  
</SimpleGrid>
    </>
  )
}
