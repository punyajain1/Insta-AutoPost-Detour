import axios from 'axios';
import qs from 'qs'; // using qs to format form-urlencoded data if needed, or we can just send JSON. Wait, Buffer API prefers application/x-www-form-urlencoded

export async function scheduleBufferPost(imageUrl: string, caption: string): Promise<any> {
  const accessToken = process.env.BUFFER_ACCESS_TOKEN;
  const profileId = process.env.BUFFER_IG_PROFILE_ID;

  if (!accessToken || !profileId) {
    console.warn('Buffer credentials missing. Skipping post.');
    return null;
  }

  try {
    const query = `
      mutation CreatePost($text: String!, $channelId: ChannelId!, $imageUrl: String!) {
        createPost(
          input: {
            text: $text
            channelId: $channelId
            schedulingType: automatic
            mode: addToQueue
            assets: [
              {
                image: {
                  url: $imageUrl
                }
              }
            ]
            metadata: {
              instagram: {
                type: post
                shouldShareToFeed: true
              }
            }
          }
        ) {
          ... on PostActionSuccess {
            post {
              id
            }
          }
          ... on MutationError {
            message
          }
        }
      }
    `;

    const response = await axios.post(
      'https://api.buffer.com',
      {
        query,
        variables: {
          text: caption,
          channelId: profileId,
          imageUrl: imageUrl,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const data = response.data;
    if (data.errors) {
      throw new Error(`Buffer GraphQL Error: ${JSON.stringify(data.errors)}`);
    }

    if (data.data?.createPost?.message) {
      throw new Error(`Buffer Mutation Error: ${data.data.createPost.message}`);
    }

    return data;
  } catch (error: any) {
    console.error('Buffer Post Error:', error.response?.data || error.message);
    throw error;
  }
}
