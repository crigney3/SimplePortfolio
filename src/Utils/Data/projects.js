import { DemoReels } from "../../Media"
import { BeatSaberImages, BlindsightImages, CharityStreamImages, DarkOfKnightImages, DisorientExpressImages, DungeonsAndDiningImages, ETForTheAtariImages, GazeboImages, HLAlyxImages, PotionPapaImages, ResearchGeocachingImages, RiverWipeoutImages, SFMImages, SHOEImages, StonksImages, TwitchSpeaksImages, TwitchTopImages } from "../../Media/Projects"

const createLightboxSlide = (src) => ({
    type: 'image',
    src
})

const SHOEProjectData = {
    title: "SHOE",
    timeWorking: "2020 - 2024",
    description: "The Sorta Helpful Open Engine is my 3D game engine, complete with everything from multiple lighting types to custom shaders to terrain to GPU-based particles to scene saving/loading to project-based work etc. It’s a huge app capable of almost anything a game engine needs to be distributable, as well as its own launcher which keeps the engine updated and allows you to select which project you want to launch SHOE on. There’s no way I can cover the breadth and depth of SHOE here, so go download the installer and try for yourself! If there’s any problem running it, email me at coreyrigney@gmail.com and I’d be excited to help debug it.",
    photos: SHOEImages.gallery.map(createLightboxSlide),
    brandingImage: SHOEImages.brandingImage,
    reel: DemoReels.SHOEReel,
    websiteLink: "",
    githubLink: "https://github.com/crigney3/SHOE",
    downloadLink: "https://drive.google.com/file/d/1ELAgtsOTWaBgq0DhRRWaIoB2h9lJEObG/view?usp=sharing",
    itchLink: "",
    techArray: ["C++", "C", "HLSL", "C#"]
}

const BlindsightData = {
    title: "Blindsight",
    timeWorking: "2024 - Current",
    description: "A short horror game using Unreal Engine’s Instanced Static Mesh and Raycast systems to create a surreal environment-mapping experience. Navigate a bioweapons laboratory without being able to see, relying on your LIDAR-like 'Blindsight' to guide you. You can also find visible objects, although they are initially jet black and need to be 'cleaned off' to be visible. These are the goals of the game which further the story of overstimulation and sensory experience.",
    photos: BlindsightImages.gallery.map(createLightboxSlide),
    brandingImage: BlindsightImages.brandingImage,
    reel: DemoReels.BlindsightReel,
    websiteLink: "",
    githubLink: "https://github.com/crigney3/UnrealLIDAR",
    downloadLink: "https://drive.google.com/file/d/1r5Mc3wMupLRj4RQRrgtL54qooAns1Omn/view?usp=sharing",
    itchLink: "",
    techArray: ["Unreal5"]
}

const DisorientExpressData = {
    title: "Disorient Express",
    timeWorking: "2026 - 2026",
    description: "A new take on the Friendslop genre, Disorient Express challenges players to be the first to reach the center car in a line of constantly-shuffling train cars (in train heaven, of course.) Pushing your friends into a different car is encouraged! I implemented multiplayer and proximity voice chat, as well as Steam integration.",
    photos: DisorientExpressImages.gallery.map(createLightboxSlide),
    brandingImage: DisorientExpressImages.brandingImage,
    reel: DemoReels.DisorientExpressReel,
    websiteLink: "",
    githubLink: "",
    downloadLink: "https://drive.google.com/file/d/1JBHkJhYI50_27eqW2Ix7IZnfbosPotja/view?usp=sharing",
    itchLink: "",
    techArray: ["Unreal5", "C++"]
}

const RiverWipeoutData = {
    title: 'River Wipeout',
    timeWorking: '2025 - 2025',
    description: 'Working at Muddy Robot, I helped publish their debut mobile game - River Wipeout - by providing level design, usability and optimization review. Check out River Wipeout now on the google play and app store!',
    photos: RiverWipeoutImages.gallery.map(createLightboxSlide),
    brandingImage: RiverWipeoutImages.brandingImage,
    reel: DemoReels.LazyRiverReel,
    websiteLink: "https://muddyrobot.com/",
    githubLink: "",
    downloadLink: "https://play.google.com/store/apps/details?id=com.MuddyRobot.RiverWipeout&hl=en_US",
    itchLink: "",
    techArray: ["Unity", "C#"],
}

const CharityStreamData = {
    title: "CSH Minecraft Charity Stream(s)",
    timeWorking: "2019 - 2022",
    description: "I built CSH’s Minecraft Charity Stream at the same time that Tiltify and Crowd Control were bringing interactive streaming to all. I hadn’t heard of those, and so I built a tool where charitable donations could directly send items, mobs, and potions to a Minecraft server, then turned that into an annual stream! As the event expanded year on year, my team grew to face all the challenges of scaling the event. By the time I graduated, we had Youtube and Twitch content creators joining and we had raised over $3000 for Doctors Without Borders.",
    photos: CharityStreamImages.gallery.map(createLightboxSlide),
    brandingImage: CharityStreamImages.brandingImage,
    reel: DemoReels.CharityStreamReel,
    websiteLink: "http://dionysus.headass.house:3000",
    githubLink: "https://github.com/aidan-brown/Charity-Stream-Web-App/tree/master",
    downloadLink: "",
    itchLink: "",
    youtubeLink: "https://youtu.be/PU6Bopb1CVE",
    techArray: ["React", "NodeJS", "SASS", "SQL"],
}

const DungeonsDiningData = {
    title: "Dungeons and Dining",
    timeWorking: "2024 - 2024",
    description: "A roguelike dungeon-crawler where you gather ingredients from fallen chefs to run your restaurant, Dungeons and Dining is a team Game Jam project with a cartoon aesthetic. While unfinished for now, Dungeons and Dining has lots of polish on what is done, and is fully playable on any windows system, sporting a full cooking system with customer orders, ingredients management and preparation, random weapon and item generation, fancy animations and sounds for loot, enemies, and the dungeon store, and a large demo dungeon floor to explore and find food in. I used Unreal's MVVM system to streamline collaboration between our artist and programmer. This also kept the constant UI updates optimized.",
    photos: DungeonsAndDiningImages.gallery.map(createLightboxSlide),
    brandingImage: DungeonsAndDiningImages.brandingImage,
    reel: DemoReels.DungeonDiningReel,
    websiteLink: "",
    githubLink: "https://github.com/crigney3/DungeonsAndDining",
    downloadLink: "https://drive.google.com/file/d/1c9-Sld-2zucA7SEh7urpO4rCs1WzTkh5/view?usp=sharing",
    itchLink: "",
    techArray: ["Unreal5", "Blueprints", "MVVM"]
}

const PotionPapaData = {
    title: "Potion Papa",
    timeWorking: "2021 - 2021",
    description: "Made with a small team, Potion Papa is a potion-mixing adventure based on the Dresden Files book series.",
    photos: PotionPapaImages.gallery.map(createLightboxSlide),
    brandingImage: PotionPapaImages.brandingImage,
    reel: DemoReels.PotionPapaReel,
    websiteLink: "",
    githubLink: "",
    downloadLink: "",
    itchLink: "",
    techArray: ["Unity", "C#"]
}

const BeatSaberData = {
    title: "Beat Saber Maps",
    timeWorking: "2022 - 2023",
    description: "Beat maps for the VR lightsaber-slashing rhythm game, Beat Saber. I made a total of four of these back when I was a top 8000 Beat Saber player - 2 full songs, and 2 joke maps that I made as warm ups.",
    photos: BeatSaberImages.gallery.map(createLightboxSlide),
    brandingImage: BeatSaberImages.brandingImage,
    reel: DemoReels.BeatSaberReel,
    websiteLink: "",
    githubLink: "",
    downloadLink: "",
    itchLink: "",
    miscLinkArray: [{"You're my dad!": "https://beatsaver.com/maps/2d56e"}, {"Oh the Places": "https://beatsaver.com/maps/2d471"}, {"Lilies of the Valley": "https://beatsaver.com/maps/2d471"}, {"Laundry Alarm": "https://beatsaver.com/maps/2d421"}],
    techArray: ["ChroMapper"],
}

const HalfLifeData = {
    title: "Half-Life Alyx Mapping",
    timeWorking: "2022 - 2022",
    description: "Made and modeled in the Source 2 engine, “Sewer Infiltration” is a short but dense map for the VR game Half-Life Alyx. Designed with lighting as the player’s guide, this level keeps the player on their toes by swapping between combat and puzzles. The linked video is not mine, but a half-life alyx youtuber who played my level!",
    photos: HLAlyxImages.gallery.map(createLightboxSlide),
    brandingImage: HLAlyxImages.brandingImage,
    reel: DemoReels.HLAlyxReel,
    websiteLink: "https://steamcommunity.com/sharedfiles/filedetails/?id=2472444720",
    githubLink: "",
    downloadLink: "",
    itchLink: "",
    techArray: ["Hammer", "Source 2"]
}

const ResearchGeocachingData = {
    title: "FactDrop",
    timeWorking: "2025 - 2026",
    description: "Built for the University of Evansville, FactDrop allows students to place facts and research at a constant location in the real world. Then, other students can go find the information by walking up to it and tapping! Includes a full administrative system to prevent misuse. Get it now on iOS by searching FactDrop in the app store!",
    photos: ResearchGeocachingImages.gallery.map(createLightboxSlide),
    brandingImage: ResearchGeocachingImages.brandingImage,
    reel: "",
    websiteLink: "",
    githubLink: "https://github.com/crigney3/Research-Geocaching",
    downloadLink: "",
    itchLink: "",
    techArray: ["React", "Node", "SQL", "Javascript"]
}

const TwitchTopRPGData = {
    title: "TwitchTopRPG",
    timeWorking: "2025 - 2025",
    description: "TwitchTopRPG is a tool that lets me run tabletop games entirely through Twitch, with the viewers becoming players without needing to install anything or have any knowledge of commands. It uses websockets to keep all data synced across my “admin panel” instance and the instances used in OBS to show viewers their stats. I plan to expand it beyond running games for my friends into making content for Youtube and Twitch.",
    photos: TwitchTopImages.gallery.map(createLightboxSlide),
    brandingImage: TwitchTopImages.brandingImage,
    reel: "",
    websiteLink: "",
    githubLink: "https://github.com/crigney3/StreamElements",
    downloadLink: "",
    itchLink: "",
    youtubeLink: "https://www.youtube.com/shorts/UxsVckoWQro",
    twitchLink: "https://www.twitch.tv/twitchtoprpg",
    techArray: ["Python", "React", "Twitch", "NodeJS", "ElevenLabs"],
}

const TwitchSpeaksData = {
    title: "Twitch Speaks",
    timeWorking: "2025 - 2025",
    description: "Twitch Speaks is a multithreaded custom TTS implementation for Twitch, allowing viewers to speak to the streamer directly. It’s built on top of DougDoug’s Twitch Connection code and CoquiTTS’s AI, and is capable of handling dozens of messages at once if necessary. It’s also configurable at launch, allowing the choice of faster or better-sounding voices, and can be easily scaled by adding more threads.",
    photos: TwitchSpeaksImages.gallery.map(createLightboxSlide),
    brandingImage: TwitchSpeaksImages.brandingImage,
    reel: "",
    websiteLink: "",
    githubLink: "https://github.com/crigney3/TwitchMultiTTS",
    downloadLink: "",
    itchLink: "",
    techArray: ["Python", "CoquiTTS"]
}

const GazeboData = {
    title: "Gazebo Caretaker",
    timeWorking: "2024 - 2024",
    description: "Made for my brother entirely to his spec, Gazebo Caretaker is a tower defense game with only a single tower, alongside a controllable player (the titular Gazebo Caretaker) who must help defend the Gazebo. Levels, enemies, and upgrades are all adjustable by JSON, and while this project would need a lot more work to become a full game, it’s not far from a demo of 10 levels or so.",
    photos: GazeboImages.gallery.map(createLightboxSlide),
    brandingImage: GazeboImages.brandingImage,
    reel: "",
    websiteLink: "",
    githubLink: "https://github.com/crigney3/GazeboCaretaker/tree/master",
    downloadLink: "",
    itchLink: "",
    techArray: ["Unreal5", "Blueprints"]
}

const DarkOfKnightData = {
    title: "Dark Of Knight",
    timeWorking: "2024 - 2024",
    description: "A quick demo made for a local game jam, I made Dark of Knight to learn Godot. Dark of Knight itself is a simple concept - your light is constantly fading, and you need to platform to the next torch before it runs out!",
    photos: DarkOfKnightImages.gallery.map(createLightboxSlide),
    brandingImage: DarkOfKnightImages.brandingImage,
    reel: DemoReels.DarkOfKnightReel,
    websiteLink: "",
    githubLink: "https://github.com/crigney3/DarkOfKnight",
    downloadLink: "",
    itchLink: "https://yakman3.itch.io/dark-of-knight",
    techArray: ["Godot"]
}

const StonksData = {
    title: "Stonks!",
    timeWorking: "2020 - 2020",
    description: "An idle game where you try and game the stock market that I made on a small team, Stonks was inspired by the investing craze of January 2021.",
    photos: StonksImages.gallery.map(createLightboxSlide),
    brandingImage: StonksImages.brandingImage,
    reel: "",
    websiteLink: "",
    githubLink: "https://github.com/rhysstever/Stonks",
    downloadLink: "https://drive.google.com/file/d/1CXXBJP56dRUt2CZ6rI2pBWgUpDlqo73V/view?usp=sharing",
    itchLink: "",
    techArray: ["Unity", "C#"]
}

const ETForTheAtariData = {
    title: "E.T. for the A.T.A.R.I.",
    timeWorking: "2019 - 2019",
    description: "A game about building tough structures to withstand bombardment by trebuchet, E.T. for the A.T.A.R.I. was also part of a bet of who could make the longest acronym name for a game that was itself the name of another game.",
    photos: ETForTheAtariImages.gallery.map(createLightboxSlide),
    brandingImage: ETForTheAtariImages.brandingImage,
    reel: DemoReels.ETForTheAtariReel,
    websiteLink: "",
    githubLink: "",
    downloadLink: "",
    itchLink: "",
    techArray: ["Unity", "C#"]
}

const SFMData = {
    title: "Source Filmmaker TF2 Renders",
    timeWorking: "2014 - 2019",
    description: "During my high school TF2 phase, I first got into lighting and posing through Source FilmMaker (SFM), and made tons of these renders for various other TF2 players. I've selected my favorites for this portfolio, but there are lots more.",
    photos: SFMImages.gallery.map(createLightboxSlide),
    brandingImage: SFMImages.brandingImage,
    reel: "",
    websiteLink: "",
    githubLink: "",
    downloadLink: "",
    itchLink: "",
    techArray: ["Source FilmMaker"]
}

export const projectData = [
    SHOEProjectData,
    BlindsightData,
    DisorientExpressData,
    ResearchGeocachingData,
    RiverWipeoutData,
    CharityStreamData,
    DungeonsDiningData,
    PotionPapaData,
    BeatSaberData,
    HalfLifeData,
    TwitchTopRPGData,
    TwitchSpeaksData,
    GazeboData,
    DarkOfKnightData,
    StonksData,
    ETForTheAtariData,
    SFMData,
]