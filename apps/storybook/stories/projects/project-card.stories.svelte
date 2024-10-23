<script context='module'>
  import ProjectCard from '@components/projects/project-card.svelte'
  import { Story, Template } from '@storybook/addon-svelte-csf'

  export const meta = {
    title: 'Projects/Project',
    component: ProjectCard,
    tags: ['autodocs'],
  }

  const project = {
    video: 'https://www.youtube.com/embed/COfJ9CX5oEU',
    picture: undefined,
    alt: 'CommuniPlant demo',
    demoLink: '',
    sourceLink: 'https://github.com/HasithDeAlwis/CommuniPlant',
    readMoreLink: 'https://devpost.com/software/communiplant',
    title: 'CommuniPlant',
    description: 'A hackathon winning project that helps people to take care of their neighbourhoods and encourages community engagement.',
  }

  const isTextRight = true
</script>

<Template let:args>
  <ProjectCard {...args} />
</Template>

<Story name='Basic Skills Section' args={{ project, isTextRight }} />
