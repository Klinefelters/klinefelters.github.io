export const projects = [
    {
        title: 'Robotic Claw',
        description: 'A miniature robotic claw designed using OnShape and a SG90 MicroServo',
        buttons: [{ name: 'CAD', url: 'https://cad.onshape.com/documents/cacc59316646ba247131ba22/w/3a6cf60b0d3d9ae64eba0fb9/e/8bd662aa1674fbb0c276bd7b?renderMode=0&uiState=65d3633d1954bc5ce7fa2c4f'}],
        video: '/roboticclaw.mp4'
    },
    {
        title: 'PINN Projectiles',
        description: 'A Taipy powered website that uses a Physics Informed Neural Network to predict linear projectile motion.',
        buttons: [{ name: 'GitHub', url: 'https://github.com/Etown-RMI/PINN-Projectiles' }],
        video: '/pinnprojectiles.mp4'
    },
    {
        title: 'Go Fish Engine',
        description: 'A python Go Fish Engine to test bots against each other.',
        buttons: [{ name: 'GitHub', url: 'https://github.com/Klinefelters/GoFishEngine' }],
        video: '/gofishengine.mp4'
    },
    {
        title: 'OmniPi',
        description: 'A Raspberry Pi powered robot that can move in any direction using a custom programmed web interface. ',
        buttons: [{ name: 'GitHub', url: 'https://github.com/Klinefelters/OmniPi' }, { name: 'Manual', url: '/OmniPi.pdf', download: true }],
        video: '/OmniPi.mp4'
    },
    // {
    //     title: 'JayRadar',
    //     description: 'A Co-Processor agonistic Yolov8 powered object detection system for FIRST Robotics Competitions.',
    //     buttons: [{ name: 'GitHub', url: 'https://github.com/BlueJayADAL/JayRadar' }, { name: 'Paper', url: '/JayRadar.pdf', download: true }],
    //     video: '/wordwave.mp4'
    // },
    {
        title: 'Plumbing Trainer',
        description: 'An interactive teaching aid that allows students to build and test plumbing systems.',
        buttons: [
            { name: 'News', url: 'https://news.etown.edu/index.php/2023/06/26/elizabethtown-college-engineering-students-complete-community-based-project-with-help-from-alumnus/' },
            { name: 'Magazine', url: 'https://www.contractormag.com/training/article/21268679/interactive-plumbing-trainer-college-project-wins-attention-accolades' },
            { name: 'CAD', url: '/plumbingtrainer.zip', download: true },
        ],
        video: '/plumbingtrainer.mp4'
    },
    {
        title: 'Word Wave',
        description: 'A daily vocabulary game that rewards players with tokens on the Solana blockchain.',
        buttons: [
            { name: 'GitHub', url: 'https://github.com/Etown-Computer-Science-Club/SolanaWordWave' },
            { name: 'Website', url: 'https://wordwave.us' }
        ],
        video: '/wordwave.mp4'
    },
    {
        title: 'Signal Noise',
        description: 'A python simulation of signals, noise types, and filtering strategies for easy visualization.',
        buttons: [{ name: 'GitHub', url: 'https://github.com/Klinefelters/SignalNoise' }],
        video: '/signalnoise.mp4'
    },
];