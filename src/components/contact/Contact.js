import React from 'react'
import PropTypes from 'prop-types'

import SocialLinks from './SocialLinks/SocialLinks'

import Layout from '../layout'

import SEO from '../seo'

import './Contact.scss'

const propTypes = {}

const Contact = () => {
  return (
    <Layout>
      <SEO />

      <div className="contacts-page">
        <h3>Contacts</h3>
        <SocialLinks />
      </div>
    </Layout>
  )
}

Contact.propTypes = propTypes

export default Contact
