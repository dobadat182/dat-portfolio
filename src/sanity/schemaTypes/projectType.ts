import { defineArrayMember, defineField, defineType } from 'sanity';


export const projectType = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'shortName',
            title: 'Short name',
            type: 'string',
            placeholder: 'Safety Path -> STP',
        }),
        defineField({
            name: 'sdescription',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'startDate',
            title: 'Start Date',
            type: 'datetime',
        }),
        defineField({
            name: 'endDate',
            title: 'End Date',
            type: 'datetime',
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Planned', value: 'planned' },
                    { title: 'In Progress', value: 'inProgress' },
                    { title: 'Completed', value: 'completed' },
                ],
            },
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'url',
            title: 'URL',
            type: 'url',
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [defineArrayMember({ type: 'string' })],
        })
    ],
});
