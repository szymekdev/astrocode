-- Insert sample projects data
INSERT INTO projects (
    title, 
    description, 
    category, 
    tags, 
    image_url, 
    gallery_urls,
    client_name, 
    completion_date, 
    project_url, 
    github_url,
    discord_user_id,
    featured
) VALUES 
(
    'Advanced Discord Moderation Bot',
    'Zaawansowany bot moderacyjny z funkcjami AI, automatyczną moderacją, systemem ostrzeżeń i integracją z bazą danych. Bot obsługuje ponad 10,000 użytkowników dziennie.',
    'discord-bot',
    ARRAY['Discord.js', 'Node.js', 'PostgreSQL', 'AI', 'Moderacja'],
    'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    ARRAY[
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop'
    ],
    'GameServer Pro',
    '2024-01-15',
    'https://discord.gg/example',
    'https://github.com/astrocode/moderation-bot',
    '123456789012345678',
    true
),
(
    'Minecraft Survival Server Plugin Pack',
    'Kompletny zestaw pluginów dla serwera survival Minecraft zawierający ekonomię, ochronę terenu, sklepy graczy i system questów.',
    'minecraft-plugin',
    ARRAY['Java', 'Spigot', 'MySQL', 'Economy', 'Protection'],
    'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop',
    ARRAY[
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop'
    ],
    'CraftWorld',
    '2024-02-20',
    'https://craftworld.pl',
    NULL,
    '987654321098765432',
    true
),
(
    'Epic Medieval Castle Build',
    'Monumentalna budowla średniowiecznego zamku z pełnym wnętrzem, systemem obronnym i otaczającym miastem. Projekt trwał 3 miesiące.',
    'minecraft-build',
    ARRAY['WorldEdit', 'Medieval', 'Architecture', 'Detailed'],
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
    ARRAY[
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
    ],
    'FantasyRealm',
    '2024-03-10',
    NULL,
    NULL,
    '456789012345678901',
    false
),
(
    'YouTube Channel Branding Package',
    'Kompletny pakiet brandingowy dla kanału YouTube zawierający logo, bannery, intro/outro, thumbnails i grafiki social media.',
    'graphics',
    ARRAY['Photoshop', 'After Effects', 'Branding', 'YouTube'],
    'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    ARRAY[
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop'
    ],
    'TechReviewer',
    '2024-01-28',
    'https://youtube.com/@techreviewer',
    NULL,
    '234567890123456789',
    true
),
(
    'Automated Trading Bot',
    'Bot do automatycznego tradingu kryptowalut z zaawansowanymi algorytmami, analizą techniczną i systemem zarządzania ryzykiem.',
    'automation',
    ARRAY['Python', 'Trading', 'API', 'Cryptocurrency', 'ML'],
    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
    ARRAY[
        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop'
    ],
    'CryptoTrader',
    '2024-02-14',
    NULL,
    'https://github.com/astrocode/trading-bot',
    '345678901234567890',
    false
),
(
    'Gaming Montage Series',
    'Seria profesjonalnych montaży gamingowych z efektami specjalnymi, synchronizacją z muzyką i zaawansowaną kolorystyką.',
    'video-editing',
    ARRAY['Premiere Pro', 'After Effects', 'Gaming', 'Montage'],
    'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop',
    ARRAY[
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop'
    ],
    'ProGamer',
    '2024-03-05',
    'https://youtube.com/@progamer',
    NULL,
    '567890123456789012',
    false
);
