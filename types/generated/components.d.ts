import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementFeature extends Schema.Component {
  collectionName: 'components_element_features';
  info: {
    displayName: 'feature';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ElementSectionHeader extends Schema.Component {
  collectionName: 'components_element_section_headers';
  info: {
    displayName: 'Section Header';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
  };
}

export interface ElementSection extends Schema.Component {
  collectionName: 'components_element_sections';
  info: {
    displayName: 'section';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
  };
}

export interface ElementSocial extends Schema.Component {
  collectionName: 'components_element_socials';
  info: {
    displayName: 'social';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionAbout extends Schema.Component {
  collectionName: 'components_section_abouts';
  info: {
    displayName: 'about';
  };
  attributes: {
    header: Attribute.Component<'element.section-header', true>;
    video: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionFeatures extends Schema.Component {
  collectionName: 'components_section_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    header: Attribute.Component<'element.section-header', true>;
    feature1: Attribute.Component<'element.feature', true>;
    feature2: Attribute.Component<'element.feature', true>;
    feature3: Attribute.Component<'element.feature', true>;
  };
}

export interface SectionHero extends Schema.Component {
  collectionName: 'components_section_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionSocials extends Schema.Component {
  collectionName: 'components_section_socials';
  info: {
    displayName: 'socials';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'element.section-header', true>;
    instagram: Attribute.Component<'element.social', true>;
    tiktok: Attribute.Component<'element.social', true>;
    discord: Attribute.Component<'element.social', true>;
    facebook: Attribute.Component<'element.social', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'element.feature': ElementFeature;
      'element.section-header': ElementSectionHeader;
      'element.section': ElementSection;
      'element.social': ElementSocial;
      'section.about': SectionAbout;
      'section.features': SectionFeatures;
      'section.hero': SectionHero;
      'section.socials': SectionSocials;
    }
  }
}
