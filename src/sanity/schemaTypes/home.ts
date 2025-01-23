import { defineType, defineField } from 'sanity';

export const Home = defineType({
    name: 'home',
    title: 'Home Page',
    type: 'document',
    icon: () => '🏠',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'welcomeText',
            title: 'Welcome Text',
            type: 'text',
        }),
        defineField({
            name: 'featuredProjects',
            title: 'Featured Projects',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'project' } }],
        }),
    ],
});