import React from 'react';
import Helmet from 'react-helmet';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faWindows from '@fortawesome/fontawesome-free-brands/faWindows';
import faApple from '@fortawesome/fontawesome-free-brands/faApple';
import faLinux from '@fortawesome/fontawesome-free-brands/faLinux';
import faChrome from '@fortawesome/fontawesome-free-brands/faChrome';

import Navbar, { NavBarSpacer } from '../components/Navbar';
import Footer from '../components/Footer';
import PageContainer from '../lib/PageContainer';

import Paragraph from '../components/Paragraph';
import BigButton from '../components/BigButton';
import BannerContainer from '../components/Containers/BannerContainer';
import TransparentContainer from '../components/Containers/TransparentContainer';
import TransparentDeprecatedContainer from '../components/Containers/TransparentDeprecatedContainer';
import WhiteHugeTitle from '../components/WhiteHugeTitle';
import WhiteParagraph from '../components/WhiteParagraph';
import config from '../config';

import CenteredRow from '../components/Grid/CenteredRow';
import Spacer from '../components/Grid/Spacer';
import BigGhostButton from '../components/BigGhostButton';
import BigTitle from '../components/BigTitle';
import ExplanationText from '../components/ExplanationText';
import MarkdownText from '../components/MarkdownText';
import { renderWebMonetizationMeta } from '../lib/WebMonetization';

export default class DownloadPage extends React.Component {
  state = {
    showLinuxInstallationExplanations: false,
    alwaysShowLinuxInstallationExplanations: false,
  };

  render() {
    return (
      <PageContainer {...this.props.pageContext}>
        {(t) => (
          <React.Fragment>
            <Helmet
              title={t(
                'Download GDevelop or try it online - create games without programming'
              )}
            >
              <html lang={this.props.pageContext.localeCode} />
              <meta
                name="description"
                content="Download GDevelop, an open-source game creator and create your own games! No programming skills are required. Build and share your games on mobile (Android and iOS), desktop and on the web."
              />
              {renderWebMonetizationMeta()}
            </Helmet>
            <Navbar t={t} />
            <BannerContainer>
              <NavBarSpacer />
              <WhiteHugeTitle>{t('Download GDevelop')}</WhiteHugeTitle>
              <WhiteParagraph>
                {t(
                  'GDevelop is free and can be used for profit or non-profit game making.'
                )}
              </WhiteParagraph>
            </BannerContainer>
            <Spacer height="20px" />
            <TransparentContainer>
              <Paragraph>
                {t(
                  'GDevelop runs on Windows, macOS and most recent Linux distributions. You can also try it online using Chrome, Firefox or another recent web browser.'
                )}{' '}
                <MarkdownText
                  source={t(
                    "Wonder what's new in latest versions? Find the release notes in the app or [online](https://github.com/4ian/GDevelop/releases)."
                  )}
                />
              </Paragraph>
              <CenteredRow>
                <BigButton
                  to={config.gdevelopWindowsUrl}
                  category="download"
                  label="gd5-windows"
                >
                  <FontAwesomeIcon icon={faWindows} /> Windows
                </BigButton>
                <BigButton
                  to={config.gdevelopMacOSUrl}
                  category="download"
                  label="gd5-macos"
                >
                  <FontAwesomeIcon icon={faApple} /> macOS
                </BigButton>
                <BigButton
                  to={config.gdevelopLinuxUrl}
                  category="download"
                  label="gd5-linux"
                  onClick={() =>
                    this.setState({
                      alwaysShowLinuxInstallationExplanations: true,
                    })
                  }
                  onMouseOver={() =>
                    this.setState({
                      showLinuxInstallationExplanations: true,
                    })
                  }
                  onMouseLeave={() =>
                    this.setState({
                      showLinuxInstallationExplanations: false,
                    })
                  }
                >
                  <FontAwesomeIcon icon={faLinux} /> Linux
                </BigButton>
                <BigGhostButton
                  to={config.onlineEditorUrl}
                  target="_blank"
                  rel="noopener"
                  category="webapp"
                  label="webapp"
                >
                  <FontAwesomeIcon icon={faChrome} /> {t('Try it online')}
                </BigGhostButton>
              </CenteredRow>
              {this.state.showLinuxInstallationExplanations ||
              this.state.alwaysShowLinuxInstallationExplanations ? (
                <CenteredRow>
                  <ExplanationText>
                    ℹ️{' '}
                    <MarkdownText
                      source={t(
                        'This is an [AppImage](https://appimage.org/). **Make it executable first** and run it. For example: `chmod a+x GDevelop*.AppImage && ./GDevelop*.AppImage`.'
                      )}
                    />
                  </ExplanationText>
                </CenteredRow>
              ) : (
                <Spacer height="25px" />
              )}
              <Paragraph>
                {t('To create your first game, start by reading a tutorial:')}
              </Paragraph>
              <CenteredRow>
                <BigGhostButton
                  to="http://wiki.compilgames.net/doku.php/gdevelop5/tutorials/platform-game/start"
                  target="_blank"
                  rel="noopener"
                >
                  {t('Create a platformer game')}
                </BigGhostButton>
                <BigGhostButton
                  to="http://wiki.compilgames.net/doku.php/gdevelop5/tutorials/tank-shooter"
                  target="_blank"
                  rel="noopener"
                >
                  {t('Create a tank shooter game')}
                </BigGhostButton>
              </CenteredRow>
              <Paragraph>
                {t(
                  'The forum and the Discord chat are the place to get and provide help to other GDevelop users!'
                )}
              </Paragraph>
              <CenteredRow>
                <BigGhostButton to={config.forumUrl}>
                  {t('Go to the community forum')}
                </BigGhostButton>
                <BigGhostButton to={config.discordUrl}>
                  {t('Open the Discord chat')}
                </BigGhostButton>
              </CenteredRow>
              <BigTitle>{t('Contribute to GDevelop')}</BigTitle>
              <Paragraph>
                {t(
                  'GDevelop is an open-source project. You can get involved in the community to improve it!'
                )}
              </Paragraph>
              <CenteredRow>
                <BigButton to={'/contribute/'}>
                  {t('Learn how to contribute')}
                </BigButton>
              </CenteredRow>
            </TransparentContainer>
            <TransparentDeprecatedContainer>
              <BigTitle>{t('GDevelop 4 (old version)')}</BigTitle>
              <Paragraph>
                {t(
                  "Gdevelop 4 can still be downloaded. GDevelop 5 is recommended for any new user as GDevelop 4 won't be updated anymore! No support will be provided in the future for GDevelop 4: we recommend any GDevelop 4 user to upgrade to GDevelop 5."
                )}
              </Paragraph>
              <CenteredRow>
                <BigButton
                  to="https://github.com/4ian/GD/releases/download/4.0.97/gd4097.exe"
                  target="_blank"
                  category="download"
                  label="win-installer"
                >
                  {'Windows (4.0.97)'}
                </BigButton>
                <BigGhostButton
                  to="https://launchpad.net/~florian-rival/+archive/ubuntu/gdevelop"
                  target="_blank"
                  category="download"
                  label="ubuntu"
                >
                  {'Ubuntu (4.0.92 ⚠️)'}
                </BigGhostButton>
                <BigGhostButton
                  to="http://software.opensuse.org/download.html?project=home%3Avictorlevasseur&amp;package=gdevelop"
                  target="_blank"
                  category="download"
                  label="linux-obs"
                >
                  {'OpenSUSE/Fedora/Arch (4.0.92 ⚠️)'}
                </BigGhostButton>
              </CenteredRow>
              <ExplanationText>
                {t(
                  'GDevelop 4 is old and not supported anymore. We recommend switching to GDevelop 5, which is compatible with most GDevelop 4 games, has many new features and an improvement user interface.'
                )}
              </ExplanationText>
            </TransparentDeprecatedContainer>
            <Spacer height="50px" />
            <Footer t={t} />
          </React.Fragment>
        )}
      </PageContainer>
    );
  }
}
