import React from 'react';
import Adapt from 'core/js/adapt';
import { classes, compile } from 'core/js/reactHelpers';

export default function BoxMenu (props) {
  const {
    displayTitle,
    subtitle,
    body,
    pageBody,
    instruction
  } = props;

  const _graphic = Adapt.course.get('_boxmenu')?._graphic;

  return (

    <div className="menu__inner boxmenu__inner">

      {(displayTitle || subtitle || body || instruction) &&
        <div className="menu__header boxmenu__header">
          <div className="menu__header-inner boxmenu__header-inner">

            {_graphic?._src &&
              <div className="menu__image-container boxmenu__image-container">
                <img
                  className="menu__image boxmenu__image"
                  src={_graphic?._src}
                  alt={_graphic?.alt}
                  aria-hidden={!_graphic?.alt ? true : null}
                />
              </div>
            }

            <div className="menu__header-content">

              {displayTitle &&
              <div className="menu__title boxmenu__title">
                <div className={classes([
                  'menu__title-inner',
                  'boxmenu__title-inner',
                  'js-heading'
                ])} />
              </div>
              }

              {subtitle &&
              <div className="menu__subtitle boxmenu__subtitle">
                <div className="menu__subtitle-inner boxmenu__subtitle-inner" dangerouslySetInnerHTML={{ __html: compile(subtitle) }}/>
              </div>
              }

              {(body || pageBody) &&
                <div className="menu__body boxmenu__body">
                  <div className="menu__body-inner boxmenu__body-inner" dangerouslySetInnerHTML={{ __html: compile(pageBody || body) }} />
                </div>
              }

              {instruction &&
              <div className="menu__instruction boxmenu__instruction">
                <div className="menu__instruction-inner boxmenu__instruction-inner" dangerouslySetInnerHTML={{ __html: compile(instruction) }}/>
              </div>
              }

            </div>

          </div>
        </div>
      }

      <div className="menu__item-container boxmenu__item-container">
        <div
          className={classes([
            'menu__item-container-inner',
            'boxmenu__item-container-inner',
            'js-children'
          ])}
          role="list"
        >
          {/* Menu items render here */}
        </div>
      </div>

    </div>
  );
}
