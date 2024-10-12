import { globalKeys } from '$lib/keys'
import type { AboutMeAssetType, AboutMeTextType } from '$lib/models/about-me'
import type { AboutMeAsset } from '$lib/models/generated-types'

export async function getAboutMeData() {
  const query = `
    query {
      AboutMeAssets {
        docs {
          aboutMeOrder
          aboutMeSVG {
            url
            alt
          }
        } 
      }
      AboutMeDescriptions {
        docs {
          aboutMeDescription
          aboutMeSubheader
        }
      }
    }
`

  const endpoint = `${globalKeys.GRAPHQL_URL}`

  try {
    const response = await fetch(endpoint, {
      method: 'POST', // Changed to POST
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({ query }), // Send query in body
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    const assetData: Array<AboutMeAssetType> = data.data.AboutMeAssets.docs.map((asset: AboutMeAsset) => {
      return {
        id: asset.id,
        svgURL: `http://localhost:3000${asset.aboutMeSVG.url}`,
        svgAlt: asset.aboutMeSVG.alt,
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
