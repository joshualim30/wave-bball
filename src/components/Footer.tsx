// Footer.tsx - Footer Component
// 10/22/2024 - Joshua Lim

import React from 'react';
import { Layout } from 'antd';
import { SocialIcon } from 'react-social-icons';

const { Footer } = Layout;

// Socials (Instagram, Twitter)
const SiteFooter = () => (
    <Footer>
        <div className="flex justify-center gap-6">
            <SocialIcon url="https://www.instagram.com/wave.basketball/" target="_blank" style={{ height: 25, width: 25 }} />
            <SocialIcon url="https://www.twitter.com/@wave_bball" target="_blank" style={{ height: 25, width: 25 }} />
        </div>
    </Footer>
);

export default SiteFooter;