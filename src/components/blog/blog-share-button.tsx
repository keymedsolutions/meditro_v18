import { SocialAccountLinks } from '@/constant/constatnt'
import React from 'react'

const BlogShareButton = () => {
    return (
        <>
            <div className="share-post ml-auto">
                <ul className="social-media mb-0">
                    <li><strong>Share:</strong></li>
                    <li><a rel="noreferrer" target="_blank" href={SocialAccountLinks.FACEBOOK}><i className="fab fa-facebook"></i></a></li>
                    <li><a rel="noreferrer" target="_blank" href={SocialAccountLinks.LINKEDIN}><i className="fab fa-linkedin"></i></a></li>
                    <li><a rel="noreferrer" target="_blank" href={SocialAccountLinks.INSTAGRAM}><i className="fab fa-instagram"></i></a></li>
                </ul>
            </div>
        </>
    )
}

export default BlogShareButton
