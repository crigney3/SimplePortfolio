import { DungeonsAndDragonsImages, DungeonsAndDragonsImageSizes } from '../../Media/Hobbies'

const createAlbumPhoto = (src, iter) => {
    return { 
        src,
        width: DungeonsAndDragonsImageSizes[iter].width,
        height: DungeonsAndDragonsImageSizes[iter].height
    }
};

const DungeonsAndDragonsData = {
    title: "Dungeons & Dragons",
    description: "I've been running Table Top Roleplaying Games for over ten years, and they remain my favorite method of storytelling. Both in video game development and TTRPG world design, I am very passionate about creating a player experience that intrigues and draws the player in further to an immersive, collaborative experience. Check out a few of my recent and currently running campaigns below!",
    brandingImage: DungeonsAndDragonsImages.brandingImage,
    photos: DungeonsAndDragonsImages.gallery.map(createAlbumPhoto),
    sections: [
        {
            title: "Under The Obladome",
            description: "Under The Obladome tells the story of a post-apocalyptic world where the only survivors of Faerun live within country-sized domes, separated by a wasteland where space and time themselves are warped. Primarily set within Oblador, a lush and peaceful dome, the players must uncover and stop a world-ending conspiracy set in motion by the forces who destroyed Faerun. The campaign has run for over 60 sessions, and I expect to hit the finale around session 90."
        },
        {
            title: "The Tiffany Bleachers",
            description: "Loosely based on the Acquisitions Incorporated 5e model, The Tiffany Bleachers is a chaotic campaign where my players constantly test my improv skills. As the owners of an adventuring franchise of the megacorp 'Acquisitions Incorporated', the Tiffany Bleachers must keep ahead of rent and decide whether they want to support or undermine the Universal Entropy Model - a magical AI designed by the megacorps to create perfect predictability."
        },
        {
            title: "Fog City",
            description: "Set in 1906 San Francisco, Fog City is a historical fiction where eldritch entities have taken root within the Barbary Coast, the then-infamous red light district of the city. With custom mechanics built around 'forbidden knowledge' and run in a subsytem of Powered By The Apocalypse, Fog City focuses on the strength of humanity and diversity in the face of unknowable horror."
        }
    ]
}

export const hobbyData = [
    DungeonsAndDragonsData
]