import { defineArrayMember, defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "shortName",
      title: "Short name",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "datetime",
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "datetime",
    }),
    defineField({
      title: "status",
      name: "Status",
      type: "string",
      options: {
        list: [
          { title: "Planned", value: "1" },
          { title: "In Progress", value: "2" },
          { title: "Completed", value: "3" },
          { title: "Closed", value: "4" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
    }),
    defineField({
      name: "technology",
      title: "Technology",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
  ],
});
