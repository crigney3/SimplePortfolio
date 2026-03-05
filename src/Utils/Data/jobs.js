const RITITData = {
    title: "RIT Internal Technical Services",
    description: "While studying at RIT, I completed a work-study program through the IT department, where I helped students, faculty, and staff with technical issues. I also developed a couple scripts to help with the more common tech issues.",
    techArray: ["Javascript"],
    additionalTech: []
}

const MITREData = {
    title: "MITRE",
    description: "I interned at MITRE in 2019, and I was lucky enough to avoid the weapons-development departments. Instead, I worked in their little-known 'Innovation Department', a place where higher-ups would drop bizarre conceptual projects on the interns to see if there was any potential for development. This led to a remarkably creative atmosphere with many different projects, such as attempting to create a video call service from scratch that could be projected to the size of a whole wall. That project also taught me NGINX, lots of FFMPEG and Linux commands, and various networking and encoding knowledge. Other projects included using a Lightform to project different images into picture frames, building a pencil-delivering robot, and creating a voice assistant and using lots of audio samples to train it to respond to 'Hey Gustav!'",
    techArray: ["Javascript", "Python", "NGINX"],
    additionalTech: ["Snips.AI"]
}

const MicrosoftData = {
    title: "Microsoft",
    description: "I did two internships at Microsoft and then accepted a full time job under the Windows and Devices organization. Without violating my NDA, I can say I primarily worked on low-level Windows features like App Launch Prefetch, which predicts what pieces of disk data an app will need before the app has requested them during launch. I primarily worked in C, with C++ for testing and peripheral tool development, powershell scripting for automation, WinDBG and WPA for debugging, Kusto for at-scale feature performance analyses, and various other proprietary tools. I eventually left to further my goal of working in a more creative field.",
    techArray: ["C++", "C", "Kusto", "SQL", "Azure"],
    additionalTech: ["WinDBG", "WPA",]
}

const MuddyRobotData = {
    title: "Muddy Robot Games",
    description: "I currently work part-time as a game and level designer for Muddy Robot on their debut endless runner game, River Wipeout. I'm also a designer and multiplayer engineer for an upcoming unannounced title.",
    techArray: ["Unity", "Unreal5", "C#", "C++"],
    additionalTech: []
}

export const jobData = [
    RITITData,
    MITREData,
    MicrosoftData,
    MuddyRobotData
]