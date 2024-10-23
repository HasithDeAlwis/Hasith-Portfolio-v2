<script context='module'>
  import MySkills from '@components/skills/my-skills.svelte'
  import { Story, Template } from '@storybook/addon-svelte-csf'
  import AWSLogo from './../../assets/aws.svg'
  import CSharpLogo from './../../assets/CSharp.svg'
  import DjangoLogo from './../../assets/Django.svg'
  import JavaLogo from './../../assets/JavaLogo.svg'
  import JavaScriptLogo from './../../assets/javascript.svg'
  import MongoDBLogo from './../../assets/MongoDB.svg'
  import PostgreSQLLogo from './../../assets/PostgreSQL.svg'
  import PythonLogo from './../../assets/Python.svg'
  import ReactLogo from './../../assets/React.svg'
  import RubyLogo from './../../assets/Ruby.svg'
  import TailwindCSSLogo from './../../assets/TailwindCSS.svg'
  import TypeScriptLogo from './../../assets/TypeScript.svg'

  export const meta = {
    title: 'Skills/My-Skills',
    component: MySkills,
    tags: ['autodocs'],
  }

  const logos = [
    { url: AWSLogo, alt: 'AWS Logo', order: 1, id: 1 },
    { url: CSharpLogo, alt: 'C# Logo', order: 2, id: 2 },
    { url: DjangoLogo, alt: 'Django Logo', order: 3, id: 3 },
    { url: JavaLogo, alt: 'Java Logo', order: 4, id: 4 },
    { url: JavaScriptLogo, alt: 'JavaScript Logo', order: 5, id: 5 },
    { url: MongoDBLogo, alt: 'MongoDB Logo', order: 6, id: 6 },
    { url: PostgreSQLLogo, alt: 'PostgreSQL Logo', order: 7, id: 7 },
    { url: PythonLogo, alt: 'Python Logo', order: 8, id: 8 },
    { url: ReactLogo, alt: 'React Logo', order: 9, id: 9 },
    { url: RubyLogo, alt: 'Ruby Logo', order: 10, id: 10 },
    { url: TailwindCSSLogo, alt: 'Tailwind CSS Logo', order: 11, id: 11 },
    { url: TypeScriptLogo, alt: 'TypeScript Logo', order: 12, id: 12 },
  ]
</script>

<Template let:args>
  <MySkills {...args} />
</Template>

<Story name='Basic Skills Section' args={{ logos }} />
