<script context='module'>
  import IndividualSkill from '@components/skills/individual-skill.svelte'
  import { Story, Template } from '@storybook/addon-svelte-csf'
  import RubyLogo from './../../assets/Ruby.svg'
  import AWS from './../../assets/aws.svg'

  export const meta = {
    title: 'Skills/Individual-Skills',
    component: IndividualSkill,
    tags: ['autodocs'],
  }

  const skill1 = {
    picUrl: RubyLogo,
    alt: 'Ruby Logo',
    description: 'Ruby is a language I\'m currently learning and exploring to gaing new experiences with BE technologies. It\'s been very fun so far and I\'m almost done with the basics and moving forward to building my next personal project with it.',
    name: 'Ruby',
    link: 'https://www.ruby-lang.org/en/',
  }

  const skill2 = {
    picUrl: AWS,
    alt: 'AWS Logo',
    description: 'AWS is a cloud service I\'m currently learning and exploring to gaing new experiences with cloud technologies. It\'s been very fun so far and I\'m almost done with the basics and moving forward to building my next personal project with it.',
    name: 'AWS',
    link: 'https://aws.amazon.com/',
  }

</script>

<Template let:args>
  <IndividualSkill {...args} />
</Template>

<Story name='Ruby Skill' args={{ skill: skill1 }} />
<Story name='AWS Skill' args={{ skill: skill2 }} />
