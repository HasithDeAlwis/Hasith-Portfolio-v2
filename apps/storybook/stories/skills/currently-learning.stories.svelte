<script context='module'>
  import CurrentlyLearning from '@components/skills/currently-learning.svelte'
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
    title: 'Skills/Currently-Learning',
    component: CurrentlyLearning,
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

  const currentlyLearning = [
    {
      picUrl: RubyLogo,
      alt: 'Ruby Logo',
      description: 'Ruby is a language I\'m currently learning and exploring to gaing new experiences with BE technologies. It\'s been very fun so far and I\'m almost done with the basics and moving forward to building my next personal project with it.',
      name: 'Ruby',
      link: 'https://www.ruby-lang.org/en/',

    },
    {
      picUrl: JavaScriptLogo,
      alt: 'JavaScript Logo',
      description: 'JavaScript is a language I\'m currently learning and exploring to gaing new experiences with FE technologies. It\'s been very fun so far and I\'m almost done with the basics and moving forward to building my next personal project with it.',
      name: 'JavaScript',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      picUrl: TypeScriptLogo,
      alt: 'TypeScript Logo',
      description: 'TypeScript is a language I\'m currently learning and exploring to gaing new experiences with FE technologies. It\'s been very fun so far and I\'m almost done with the basics and moving forward to building my next personal project with it.',
      name: 'TypeScript',
      link: 'https://www.typescriptlang.org/',
    },
  ]
</script>

<Template let:args>
  <CurrentlyLearning {...args} />
</Template>

<Story name='Basic Skills Section' args={{ logos, currentlyLearning }} />
