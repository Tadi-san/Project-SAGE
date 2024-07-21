"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
    const fakeButtonData = [
        {
            text: "Animal",
            svg: "animal-paw-print-svgrepo-com (1).svg",
            description: "Explore the amazing world of animals! Learn about different species, their habitats, how they communicate, and the important roles they play in our ecosystem. Discover the unique characteristics and behaviors of your favorite furry, feathery, or scaly friends.",
            subButtons: [
                "Kinds of animals", "Habitats", "Communication", "Roles in our ecosystem"
            ],
            sage: "/a_giraff_with_a_degree_png-removebg-preview.png"
        },
        {
            text: "Science",
            svg: "physics-big-bang-science-atom-svgrepo-com.svg",
            description: "Dive into the fascinating realm of science! Uncover the mysteries of the universe, from the tiniest atoms to the grandest galaxies. Experiment with chemical reactions, learn about the laws of physics, and understand how the natural world works. Become a junior scientist and unlock the secrets of our extraordinary planet.",
            subButtons: [
                "Kinds of animals", "Habitats", "Communication", "Roles in our ecosystem"
            ]
        },
        {
            text: "Sport",
            svg: "sport-soccer-field-svgrepo-com.svg",
            description: "Get ready to get active and have fun! Discover the joy of sports and physical activities. Learn about the rules and strategies of different games, develop your coordination and teamwork skills, and find out how exercise can keep your body healthy and strong. Cheer on your favorite teams and be inspired to become a future sports star!",
            subButtons: [
                "Kinds of animals", "Habitats", "Communication", "Roles in our ecosystem"
            ]
        },
        {
            text: "Art",
            svg: "art-gallery-svgrepo-com.svg",
            description: "Unleash your creativity and explore the world of art! Experiment with various mediums, from painting and drawing to sculpture and photography. Learn about the techniques and styles of famous artists, and then create your own masterpieces. Discover the power of art to express emotions, tell stories, and make the world a more beautiful place.",
            subButtons: [
                "Kinds of animals", "Habitats", "Communication", "Roles in our ecosystem"
            ]
        },
        {
            text: "Reading",
            svg: "books-svgrepo-com.svg",
            description: "Embark on a magical journey through the pages of your favorite books! Discover enchanting stories, meet fascinating characters, and explore new worlds. Learn how to read with fluency and comprehension, and develop a lifelong love of literature. Reading opens the door to endless possibilities and helps you grow your imagination.",
            subButtons: [
                "Kinds of animals", "Habitats", "Communication", "Roles in our ecosystem"
            ]
        },
        {
            text: "Games",
            svg: "game-svgrepo-com.svg",
            description: "Celebrate the diversity of humanity! Learn about the unique cultures, traditions, and customs of people from around the world. Explore how different communities live, work, and interact with one another. Develop empathy, respect, and understanding for the amazing diversity of the human experience. Discover how we are all connected, despite our differences.",
            subButtons: [
                "Kinds of animals", "Habitats", "Communication", "Roles in our ecosystem"
            ]
        },
        {
            text: "Places",
            svg: "places-mountains-svgrepo-com.svg",
            description: "Venture to the farthest corners of the globe and discover the wonders of our planet! From towering mountains and ancient forests to bustling cities and serene beaches, there is so much to explore. Learn about the geography, climate, and natural resources of different regions. Gain a deeper appreciation for the beauty and diversity of our world and the importance of protecting it.",
            subButtons: [
                "Kinds of animals", "Habitats", "Communication", "Roles in our ecosystem"
            ]
        },
        {
            text: "History",
            svg: "history-log-manuscript-svgrepo-com.svg",
            description: "Uncover the fascinating stories of the past! Travel back in time and learn about the people, events, and civilizations that have shaped the world we live in today. Discover the lessons we can learn from history and how our understanding of the past can help us build a better future. Become a time traveler and immerse yourself in the rich tapestry of human experience.",
            subButtons: [
                "Kinds of animals", "Habitats", "Communication", "Roles in our ecosystem"
            ]
        }
    ];

    const [selectedButton, setSelectedButton] = useState(null);
    const [Content, SetContent] = useState("");
    const [subButtons, setSubButtons] = useState([]);

    const handleButtonClick = (index) => {
        setSelectedButton(index);
        SetContent(fakeButtonData[index].description);
        setSubButtons(fakeButtonData[index].subButtons);
    };

    return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#52FFB8_100%)] flex ">
            <div className="w-2/5 bg-transparent transform rotate-[5deg] p-5 flex flex-col gap-2 ">
                {fakeButtonData.slice(0, 4).map((v, index) => (
                    <button
                        key={index}
                        className={`border py-7 w-full flex justify-around items-center ${selectedButton === index ? 'bg-[#52FFB8] border-[#52FFB8]' : 'border-[#52FFB8] bg-white z-10'} relative`}
                        onClick={() => handleButtonClick(index)}
                    >
                        <Image src={v.svg} alt={v.text} width={50} height={50} />
                        <span>{v.text}</span>
                    </button>
                ))}
            </div>

            <div className="w-3/5 p-5 flex flex-col items-center">
                <h1 className={`${selectedButton !== null ? 'hidden' : 'text-4xl'}`}>
                    What do you want to Learn?
                </h1>
                <p className="mt-5">{Content}</p>

                <div className='mt-5 flex items-center flex-col gap-2'>
                <div className='mt-5 flex justify-around flex-wrap gap-2'>
                    {fakeButtonData[selectedButton]?.subButtons?.map((subButton, index) => (
                        <button key={index} className='border rounded-3xl border-[#52FFB8] px-2'>
                            {subButton}
                        </button>
                    ))}
                    </div>
                    {selectedButton !== null && fakeButtonData[selectedButton]?.sage && (
                   <Image className=' opacity-' src={fakeButtonData[selectedButton].sage} alt={fakeButtonData[selectedButton]?.text} width={300} height={50} />
                    )}
                </div>
            </div>

            <div className="w-2/5 bg-transparent transform rotate-[-5deg] p-5 flex flex-col gap-2 ">
                {fakeButtonData.slice(4).map((v, index) => (
                    <button
                        key={index + 4}
                        className={`border py-7 w-full flex justify-around items-center ${selectedButton === index + 4 ? 'bg-[#52FFB8] border-[#52FFB8]' : 'border-[#52FFB8] bg-white z-10'} relative`}
                        onClick={() => handleButtonClick(index + 4)}
                    >
                        <Image src={v.svg} alt={v.text} width={50} height={50} />
                        <span>{v.text}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
