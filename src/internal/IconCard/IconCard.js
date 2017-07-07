import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Icon, Button } from 'carbon-components-react';

class IconCard extends Component {
  static propTypes = {
    name: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    viewBox: PropTypes.string,
    downloadUrl: PropTypes.string,
    svgString: PropTypes.string
  };

  state = {
    displayCopied: false
  };

  toggleCopied = () => {
    this.setState({
      displayCopied: true
    });
    setTimeout(() => {
      this.setState({
        displayCopied: false
      });
    }, 2500);
  };

  handleFocus = () => {
    this.iconActions.classList.add('displayed');
  };

  handleBlur = () => {
    this.iconActions.classList.remove('displayed');
  };

  render() {
    const { name, height, width, viewBox, svgString, downloadUrl } = this.props;
    return (
      <div className="icon">
        <div tabIndex={0} className="icon__card">
          <Icon
            name={name}
            description={name}
            height={height}
            width={width}
            viewBox={viewBox}
            tabIndex={-1}
          />
          <div
            ref={iconActions => {
              this.iconActions = iconActions;
            }}
            className="icon__actions"
            onBlur={this.handleBlur}
          >
            <CopyToClipboard text={svgString} onCopy={this.toggleCopied}>
              <Button onFocus={this.handleFocus} tabIndex={0} className="icon-button">
                {this.state.displayCopied ? 'Icon Copied!' : 'Copy Icon'}
              </Button>
            </CopyToClipboard>
            <Button
              onFocus={this.handleFocus}
              tabIndex={0}
              href={downloadUrl}
              className="icon-button"
              download={`${name}.svg`}
            >
              Download
            </Button>
          </div>
        </div>
        <h5>
          {name}
        </h5>
        <span>
          {`#${name}`}
        </span>
      </div>
    );
  }
}

export default IconCard;
