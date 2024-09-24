import './Card.css';
import { Card, CardBody, Image, Text, Box } from '@chakra-ui/react'

const ArtCard = ({ titles, artist, image_thumbnail, materials, techniques, colors }) => {

    const getColors = (colors && Array.isArray(colors)) ? colors.map((color) => (
        <span
            key={color}
            style={{
                backgroundColor: color,    // Set the background color
                display: 'inline-block',   // Ensure it behaves like a block for width/height
                width: '20px',             // Set the width of the circle
                height: '20px',            // Set the height of the circle (equal to width for a perfect circle)
                borderRadius: '50%',       // Make it a circle
                margin: '0 5px'            // Add some space between the circles
            }}
        ></span>
    )) : null;

    return (
        
        <Card _hover={{filter: 'drop-shadow(2px 2px 2px black)'}} m="1rem" w="70%">
            <CardBody>
                <Image 
                src={image_thumbnail} 
                alt={titles && titles.length > 0 ? titles[0].title : "no image available"} 
                />
                
                <Box p={2} as='div' flex='1' display="flex" direction="row" justifyContent="space-between" textAlign='left'>
                    <Box>
                        <Text p={0} textAlign="left" fontSize="lg"><strong>{titles && titles.length > 0 ? titles[0].title : "Untitled"}</strong></Text>
                        <Text pt={2} textAlign="left" fontSize="md">By {artist || "Unknown Artist"}</Text>
                    </Box>

                    {getColors && <Text w="250px" p={2}>{getColors}</Text>}

                </Box>

                <Box display="flex" justifyContent="flex-end">
                    <Text 
                    style={{backgroundColor: '#6F9AAA', padding: '0.25rem', color: 'white', borderRadius: '20px'}} 
                    w="30%" 
                    p={2} 
                    m={2} 
                    fontSize="sm">
                    {techniques}
                    </Text>
                    <Text 
                    style={{backgroundColor: '#6F9AAA', padding: '0.25rem', color: 'white', borderRadius: '20px'}} 
                    w="30%" 
                    p={2} 
                    m={2} 
                    fontSize="sm">
                    {materials}
                    </Text>

                </Box>

                
            </CardBody>
        </Card>
        
    );
    
};

export default ArtCard;