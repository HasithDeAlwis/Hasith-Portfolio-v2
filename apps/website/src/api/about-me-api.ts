// eslint-disable-next-line unicorn/prefer-node-protocol
import process from 'process'
import { globalKeys } from '$lib/keys'
import type { AboutMeAssetType, AboutMeTextType } from '$lib/models/about-me'
import type { AboutMeAsset } from '$lib/models/generated-types'

export async function getAboutMeData() {
  const query
   = `
    query {
        AboutMeAssets {
            docs {
            id
            aboutMeOrder 
            aboutMeSVG {
                url
                id
                altText
            }
            }
        }
        AboutMeDescriptions {
            docs {
            id
            aboutMeSubheader
            aboutMeDescription
            }
        }
    }
    `
  const endpoint = `${globalKeys.GRAPHQL_URL}/about-me-asset?query=${query}`
  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    const assetData: Array<AboutMeAssetType> = data.data.AboutMeAssets.docs.map((asset: AboutMeAsset) => {
      return {
        id: asset.id,
        svgURL: asset.aboutMeSVG.url,
        svgAlt: asset.aboutMeSVG.altText,
        order: asset.aboutMeOrder,
      }
    })
    const textData: AboutMeTextType = data.data.AboutMeDescriptions.docs[0]
    return { assetData, textData }
  }
  catch (error) {
    console.error('Error:', error)
    return { assetData: [], textData: { aboutMeSubheader: '', aboutMeDescription: '', id: -1 } }
  }
}
