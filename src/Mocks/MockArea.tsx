import {
    HandHeart,
    Package,
    CalendarCheck,
    ThumbsUp,
    FileCss,
    Code,
    ChartBar,
    DeviceMobile,
    Suitcase,
    Layout,
    FolderOpen,
    FloppyDisk,
} from '@phosphor-icons/react';

export const Areas = [
    {
        id: 'bussiness',
        name: 'Business',
        icon: <Suitcase />,
    },
    {
        id: 'techrecruiter',
        name: 'Tech Recruiter',
        icon: <HandHeart />,
    },
    {
        id: 'product',
        name: 'Produtos',
        icon: <Package />,
    },
    {
        id: 'agile',
        name: 'Ágil',
        icon: <CalendarCheck />,
    },
    {
        id: 'socialmedia',
        name: 'Social Media',
        icon: <ThumbsUp />,
    },
    {
        id: 'uxuidesign',
        name: 'UX/UI Design',
        icon: <Layout />,
    },
    {
        id: 'frontend',
        name: 'Front End',
        icon: <FileCss />,
    },
    {
        id: 'backend',
        name: 'Back End',
        icon: <Code />,
    },
    {
        id: 'data',
        name: 'Data',
        icon: <ChartBar />,
    },
    {
        id: 'mobile',
        name: 'Mobile',
        icon: <DeviceMobile />,
    },
    {
        id: 'qa',
        name: 'QA',
        icon: <FolderOpen />,
    },
    {
        id: 'devops',
        name: 'DevOps',
        icon: <FloppyDisk />,
    },
];
