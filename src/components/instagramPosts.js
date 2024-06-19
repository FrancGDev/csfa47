import axios from 'axios';

const accessToken = 'INSTAGRAM_ACCESS_TOKEN';

export const fetchInstagramPosts = async () => {
    try {
        const response = await axios.get(`https://graph.instagram.com/me/media`, {
            params: {
                fields: 'id,caption,media_url,permalink,thumbnail_url,media_type',
                access_token: accessToken,
            },
        });

        // Retorna las últimas 5 publicaciones
        return response.data.data.slice(0, 5);
    } catch (error) {
        console.error('Error fetching Instagram posts:', error);
        return [];
    }
};
