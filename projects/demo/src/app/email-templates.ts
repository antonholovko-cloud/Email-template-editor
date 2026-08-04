import { EmailBlock } from '../../../ngx-wysiwyg-editor/src/lib/wysiwyg-editor.component';

export interface EmailTemplatePreset {
  id: string;
  name: string;
  description: string;
  icon: string;
  accent: string;
  blocks: EmailBlock[];
}

export const EMAIL_TEMPLATE_PRESETS: EmailTemplatePreset[] = [
  {
    id: 'newsletter',
    name: 'Newsletter',
    description: 'Monthly digest with a feature story, secondary articles, and social links.',
    icon: '📰',
    accent: '#2196F3',
    blocks: [
      {
        id: 'nl_header',
        type: 'header',
        content: {
          companyName: 'The Monthly Digest',
          tagline: 'News, insights & updates from our team',
          backgroundColor: '#2196F3',
          textColor: '#ffffff',
          alignment: 'center'
        }
      },
      {
        id: 'nl_intro',
        type: 'text',
        content: {
          content: '<h2 style="margin: 0 0 10px 0; color: #333;">Hello Subscriber! 👋</h2><p style="margin: 0; color: #666;">Here is what happened this month — our biggest product update yet, fresh tips from the team, and a look at what is coming next.</p>',
          padding: '30px 30px 10px 30px',
          fontSize: '14px',
          lineHeight: '1.6',
          textAlign: 'left'
        }
      },
      {
        id: 'nl_hero',
        type: 'image',
        content: {
          src: 'https://placehold.co/600x280/2196F3/ffffff?text=Feature+Story',
          alt: 'Feature story',
          alignment: 'center',
          padding: '20px 30px',
          width: '100%'
        }
      },
      {
        id: 'nl_story',
        type: 'text',
        content: {
          content: '<h3 style="margin: 0 0 8px 0; color: #2196F3;">Introducing the new dashboard</h3><p style="margin: 0; color: #666;">We rebuilt the analytics dashboard from the ground up: faster loading, custom widgets, and shareable reports for your whole team.</p>',
          padding: '0 30px 10px 30px',
          fontSize: '14px',
          lineHeight: '1.6',
          textAlign: 'left'
        }
      },
      {
        id: 'nl_cta',
        type: 'button',
        content: {
          text: 'Read the Full Story',
          url: 'https://example.com/blog',
          backgroundColor: '#2196F3',
          textColor: '#ffffff',
          borderRadius: '6px',
          padding: '12px 28px',
          fontSize: '16px',
          alignment: 'center'
        }
      },
      {
        id: 'nl_divider',
        type: 'divider',
        content: { color: '#e0e0e0', thickness: '1', style: 'solid', width: '85%', margin: '10px 0' }
      },
      {
        id: 'nl_columns',
        type: 'columns',
        content: {
          count: 2,
          gap: '20px',
          columnBackground: '#f7f9fc',
          columns: [
            { content: '<h4 style="margin: 0 0 6px 0; color: #333;">📈 Community grows</h4><p style="margin: 0; color: #666; font-size: 13px;">We passed 10,000 members this month. Thank you for being part of the journey!</p>' },
            { content: '<h4 style="margin: 0 0 6px 0; color: #333;">🗓️ Upcoming webinar</h4><p style="margin: 0; color: #666; font-size: 13px;">Join us live on the 24th for a deep dive into email automation.</p>' }
          ]
        }
      },
      {
        id: 'nl_social',
        type: 'social',
        content: {
          platforms: [
            { icon: '📘', url: 'https://facebook.com' },
            { icon: '🐦', url: 'https://twitter.com' },
            { icon: '📸', url: 'https://instagram.com' },
            { icon: '💼', url: 'https://linkedin.com' }
          ],
          iconSize: '28px',
          spacing: '12',
          alignment: 'center'
        }
      },
      {
        id: 'nl_footer',
        type: 'text',
        content: {
          content: '<p style="margin: 0; color: #999; font-size: 12px;">© 2026 The Monthly Digest · You receive this because you subscribed.<br><a href="https://example.com/unsubscribe" style="color: #999;">Unsubscribe</a></p>',
          padding: '10px 30px 30px 30px',
          fontSize: '12px',
          lineHeight: '1.5',
          textAlign: 'center'
        }
      }
    ]
  },
  {
    id: 'promotion',
    name: 'Flash Sale',
    description: 'High-impact promotion with a bold banner, deal highlights, and a strong call to action.',
    icon: '🔥',
    accent: '#FF5722',
    blocks: [
      {
        id: 'pr_header',
        type: 'header',
        content: {
          companyName: '🔥 FLASH SALE',
          tagline: 'Up to 50% off — this weekend only',
          backgroundColor: '#FF5722',
          textColor: '#ffffff',
          alignment: 'center'
        }
      },
      {
        id: 'pr_hero',
        type: 'image',
        content: {
          src: 'https://placehold.co/600x300/FF5722/ffffff?text=50%25+OFF',
          alt: 'Flash sale banner',
          alignment: 'center',
          padding: '0',
          width: '100%',
          link: 'https://example.com/sale'
        }
      },
      {
        id: 'pr_pitch',
        type: 'text',
        content: {
          content: '<h2 style="margin: 0 0 10px 0; color: #333;">Everything must go!</h2><p style="margin: 0; color: #666;">For 72 hours only, our entire catalog is on sale. Use code <strong>FLASH50</strong> at checkout — no minimum order.</p>',
          padding: '30px 30px 10px 30px',
          fontSize: '15px',
          lineHeight: '1.6',
          textAlign: 'center'
        }
      },
      {
        id: 'pr_cta',
        type: 'button',
        content: {
          text: 'Shop the Sale →',
          url: 'https://example.com/sale',
          backgroundColor: '#FF5722',
          textColor: '#ffffff',
          borderRadius: '30px',
          padding: '15px 40px',
          fontSize: '18px',
          alignment: 'center'
        }
      },
      {
        id: 'pr_deals',
        type: 'columns',
        content: {
          count: 2,
          gap: '20px',
          columnBackground: '#fff3e0',
          columns: [
            { content: '<h4 style="margin: 0 0 6px 0; color: #E64A19;">👟 Sneakers</h4><p style="margin: 0; color: #666; font-size: 13px;"><s>$120</s> <strong style="color: #E64A19;">$59</strong> — best sellers included.</p>' },
            { content: '<h4 style="margin: 0 0 6px 0; color: #E64A19;">🎒 Backpacks</h4><p style="margin: 0; color: #666; font-size: 13px;"><s>$80</s> <strong style="color: #E64A19;">$39</strong> — all colors, all sizes.</p>' }
          ]
        }
      },
      {
        id: 'pr_urgency',
        type: 'text',
        content: {
          content: '<p style="margin: 0; color: #E64A19; font-weight: bold;">⏰ Sale ends Sunday at midnight</p>',
          padding: '10px 30px',
          fontSize: '14px',
          lineHeight: '1.5',
          textAlign: 'center'
        }
      },
      {
        id: 'pr_divider',
        type: 'divider',
        content: { color: '#ffccbc', thickness: '2', style: 'solid', width: '85%', margin: '10px 0' }
      },
      {
        id: 'pr_footer',
        type: 'text',
        content: {
          content: '<p style="margin: 0; color: #999; font-size: 12px;">© 2026 Example Shop · <a href="https://example.com/unsubscribe" style="color: #999;">Unsubscribe</a></p>',
          padding: '10px 30px 30px 30px',
          fontSize: '12px',
          lineHeight: '1.5',
          textAlign: 'center'
        }
      }
    ]
  },
  {
    id: 'welcome',
    name: 'Welcome / Onboarding',
    description: 'Friendly welcome email with next steps and a getting-started button.',
    icon: '👋',
    accent: '#4CAF50',
    blocks: [
      {
        id: 'wl_header',
        type: 'header',
        content: {
          companyName: 'Welcome aboard! 👋',
          tagline: 'We are thrilled to have you with us',
          backgroundColor: '#4CAF50',
          textColor: '#ffffff',
          alignment: 'center'
        }
      },
      {
        id: 'wl_greet',
        type: 'text',
        content: {
          content: '<h2 style="margin: 0 0 10px 0; color: #333;">Hi there,</h2><p style="margin: 0; color: #666;">Your account is ready. Here are three quick steps to get the most out of your first week:</p>',
          padding: '30px 30px 10px 30px',
          fontSize: '14px',
          lineHeight: '1.6',
          textAlign: 'left'
        }
      },
      {
        id: 'wl_steps',
        type: 'text',
        content: {
          content: '<ol style="margin: 0; padding-left: 20px; color: #444;"><li style="margin-bottom: 8px;"><strong>Complete your profile</strong> — it takes 2 minutes.</li><li style="margin-bottom: 8px;"><strong>Invite your team</strong> — everything is better together.</li><li><strong>Create your first project</strong> — templates included.</li></ol>',
          padding: '10px 30px',
          fontSize: '14px',
          lineHeight: '1.7',
          textAlign: 'left'
        }
      },
      {
        id: 'wl_cta',
        type: 'button',
        content: {
          text: 'Get Started',
          url: 'https://example.com/onboarding',
          backgroundColor: '#4CAF50',
          textColor: '#ffffff',
          borderRadius: '6px',
          padding: '14px 36px',
          fontSize: '16px',
          alignment: 'center'
        }
      },
      {
        id: 'wl_divider',
        type: 'divider',
        content: { color: '#e0e0e0', thickness: '1', style: 'solid', width: '85%', margin: '15px 0' }
      },
      {
        id: 'wl_help',
        type: 'columns',
        content: {
          count: 2,
          gap: '20px',
          columnBackground: '#f1f8e9',
          columns: [
            { content: '<h4 style="margin: 0 0 6px 0; color: #388E3C;">📚 Documentation</h4><p style="margin: 0; color: #666; font-size: 13px;">Guides and tutorials to help you at every step.</p>' },
            { content: '<h4 style="margin: 0 0 6px 0; color: #388E3C;">💬 Support</h4><p style="margin: 0; color: #666; font-size: 13px;">Real humans, ready to help — just reply to this email.</p>' }
          ]
        }
      },
      {
        id: 'wl_footer',
        type: 'text',
        content: {
          content: '<p style="margin: 0; color: #999; font-size: 12px;">You are receiving this email because you signed up at example.com</p>',
          padding: '15px 30px 30px 30px',
          fontSize: '12px',
          lineHeight: '1.5',
          textAlign: 'center'
        }
      }
    ]
  },
  {
    id: 'event',
    name: 'Event Invitation',
    description: 'Invitation with event details card, hero image, and an RSVP button.',
    icon: '🎟️',
    accent: '#673AB7',
    blocks: [
      {
        id: 'ev_header',
        type: 'header',
        content: {
          companyName: "You're Invited! 🎉",
          tagline: 'Product Summit 2026 — one day, all the announcements',
          backgroundColor: '#673AB7',
          textColor: '#ffffff',
          alignment: 'center'
        }
      },
      {
        id: 'ev_hero',
        type: 'image',
        content: {
          src: 'https://placehold.co/600x260/673AB7/ffffff?text=Product+Summit+2026',
          alt: 'Product Summit 2026',
          alignment: 'center',
          padding: '0',
          width: '100%'
        }
      },
      {
        id: 'ev_details',
        type: 'html',
        content: {
          code: '<div style="margin: 25px 30px; padding: 20px; background-color: #f3e5f5; border-left: 4px solid #673AB7; font-family: Arial, sans-serif;"><p style="margin: 0 0 8px 0; color: #333; font-size: 14px;">📅 <strong>Thursday, September 17, 2026</strong></p><p style="margin: 0 0 8px 0; color: #333; font-size: 14px;">🕙 10:00 AM – 5:00 PM (CET)</p><p style="margin: 0; color: #333; font-size: 14px;">📍 Convention Center, Amsterdam + Livestream</p></div>'
        }
      },
      {
        id: 'ev_text',
        type: 'text',
        content: {
          content: '<p style="margin: 0; color: #666;">Join us for keynotes, hands-on workshops, and an exclusive first look at what we are shipping next. Seats are limited — livestream access is free for everyone.</p>',
          padding: '0 30px 10px 30px',
          fontSize: '14px',
          lineHeight: '1.6',
          textAlign: 'left'
        }
      },
      {
        id: 'ev_cta',
        type: 'button',
        content: {
          text: 'RSVP Now',
          url: 'https://example.com/rsvp',
          backgroundColor: '#673AB7',
          textColor: '#ffffff',
          borderRadius: '6px',
          padding: '14px 40px',
          fontSize: '17px',
          alignment: 'center'
        }
      },
      {
        id: 'ev_spacer',
        type: 'spacer',
        content: { height: '10' }
      },
      {
        id: 'ev_footer',
        type: 'text',
        content: {
          content: '<p style="margin: 0; color: #999; font-size: 12px;">Can\'t make it? <a href="https://example.com/recordings" style="color: #673AB7;">Register anyway</a> and we will send you the recordings.</p>',
          padding: '5px 30px 30px 30px',
          fontSize: '12px',
          lineHeight: '1.5',
          textAlign: 'center'
        }
      }
    ]
  },
  {
    id: 'receipt',
    name: 'Order Receipt',
    description: 'Transactional confirmation with an itemized receipt table and tracking button.',
    icon: '🧾',
    accent: '#263238',
    blocks: [
      {
        id: 'rc_header',
        type: 'header',
        content: {
          companyName: 'Order Confirmed ✓',
          tagline: 'Order #48293 · Placed August 4, 2026',
          backgroundColor: '#263238',
          textColor: '#ffffff',
          alignment: 'center'
        }
      },
      {
        id: 'rc_thanks',
        type: 'text',
        content: {
          content: '<p style="margin: 0; color: #666;">Thanks for your purchase! Your order is being prepared and you will get another email when it ships.</p>',
          padding: '30px 30px 10px 30px',
          fontSize: '14px',
          lineHeight: '1.6',
          textAlign: 'left'
        }
      },
      {
        id: 'rc_items',
        type: 'html',
        content: {
          code: '<table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-family: Arial, sans-serif; font-size: 14px;"><tr><td style="padding: 10px 30px;"><table cellpadding="8" cellspacing="0" border="0" width="100%" style="border: 1px solid #eceff1; border-collapse: collapse;"><tr style="background-color: #eceff1;"><th align="left" style="padding: 10px; color: #37474f; border-bottom: 1px solid #cfd8dc;">Item</th><th align="right" style="padding: 10px; color: #37474f; border-bottom: 1px solid #cfd8dc;">Price</th></tr><tr><td style="padding: 10px; color: #555; border-bottom: 1px solid #eceff1;">Wireless Headphones × 1</td><td align="right" style="padding: 10px; color: #555; border-bottom: 1px solid #eceff1;">$89.00</td></tr><tr><td style="padding: 10px; color: #555; border-bottom: 1px solid #eceff1;">USB-C Cable × 2</td><td align="right" style="padding: 10px; color: #555; border-bottom: 1px solid #eceff1;">$18.00</td></tr><tr><td style="padding: 10px; color: #555;">Shipping</td><td align="right" style="padding: 10px; color: #555;">Free</td></tr><tr style="background-color: #fafafa;"><td style="padding: 10px; font-weight: bold; color: #263238; border-top: 2px solid #cfd8dc;">Total</td><td align="right" style="padding: 10px; font-weight: bold; color: #263238; border-top: 2px solid #cfd8dc;">$107.00</td></tr></table></td></tr></table>'
        }
      },
      {
        id: 'rc_cta',
        type: 'button',
        content: {
          text: 'Track Your Order',
          url: 'https://example.com/track/48293',
          backgroundColor: '#263238',
          textColor: '#ffffff',
          borderRadius: '6px',
          padding: '12px 32px',
          fontSize: '15px',
          alignment: 'center'
        }
      },
      {
        id: 'rc_divider',
        type: 'divider',
        content: { color: '#eceff1', thickness: '1', style: 'solid', width: '85%', margin: '15px 0' }
      },
      {
        id: 'rc_footer',
        type: 'text',
        content: {
          content: '<p style="margin: 0; color: #999; font-size: 12px;">Questions about your order? Reply to this email or visit our <a href="https://example.com/help" style="color: #607d8b;">Help Center</a>.</p>',
          padding: '5px 30px 30px 30px',
          fontSize: '12px',
          lineHeight: '1.5',
          textAlign: 'center'
        }
      }
    ]
  }
];
