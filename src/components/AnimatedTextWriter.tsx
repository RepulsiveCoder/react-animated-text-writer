import React from "react";

import "./AnimatedTextWriter.css";

const sTags = [' ', '<', '&'];
const eTags = ['', '>', ';'];

const getIncrement = (content: string, index: number, fistCall=true) => {
    let increment = 1;
    let decrement = 0;
    const currentChar = content.substring(index, index+1);

    const tstart = sTags.indexOf(currentChar);
    if (tstart !== -1) {
        if (eTags[tstart].length === 0) {
            increment = 2;
            decrement = 1;
            if (fistCall === false) {
                increment = 1;
                decrement = 0;
            }
        } else {
            const tend = content.indexOf(eTags[tstart], index);
            if (tend !== -1) {
                increment = tend - index + 1;
            }
        }

        const nextChar = content.substring(index+increment-decrement, index+increment-decrement+1);

        if (sTags.includes(nextChar)) {
            increment += getIncrement(content, index+increment-decrement, false);
        }
    }

    return increment;
};

interface AnimatedTextWriterProps {
    content?: string;
    prefix?: string;
    suffix?: string;
    replacablePrefix?: string;
    codePrefix?: string;
    codeSuffix?: string;
    delay?: number;
    startDelay?: number;
    displayCursor?: boolean;
    displayCursorEnd?: boolean;
    displayCodeWrapper?: boolean;
    displayCodeLineNumber?: boolean;
    displayCodeLineNumberMax?: number;
    className?: string;
    cursorColor?: string;
    cursorLineHeight?: string;
    codeWrapperClasses?: string;
    codeWrapperStyle?: string | React.CSSProperties;
    codeWrapperWhiteSpace?: "auto" | "nowrap";
    displayClickMoreButtonAndPause?: boolean;
    displayFullContentOnClickMoreButton?: boolean;
    clickMoreHeaderText?: string;
    clickMoreHeaderClassString?: string;
    viewMoreButtonText?: string;
    viewLessButtonText?: string;
    showContentAuto?: boolean;
    sx?: React.CSSProperties;
}

const AnimatedTextWriter = ({
        content = 'This is a Sample Text',
        prefix = '',
        suffix = '',
        replacablePrefix = '',
        codePrefix = '',
        codeSuffix = '',
        delay = 250,
        startDelay = 1000,
        displayCursor = true,
        displayCursorEnd = true,
        displayCodeWrapper = true,
        displayCodeLineNumber = true,
        displayCodeLineNumberMax = 10,
        className = '',
        cursorColor = '#000',
        cursorLineHeight = '1rem',
        codeWrapperClasses = '',
        codeWrapperStyle = '',
        codeWrapperWhiteSpace = 'auto',
        displayClickMoreButtonAndPause = false,
        displayFullContentOnClickMoreButton = false,
        clickMoreHeaderText = '',
        clickMoreHeaderClassString = '',
        viewMoreButtonText = 'More',
        viewLessButtonText = 'Less',
        showContentAuto = false,
        sx={}
    } : AnimatedTextWriterProps) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [currentContent, setCurrentContent] = React.useState('');
    const [enabled, setEnabled] = React.useState(!displayClickMoreButtonAndPause);
    const [showContent, setShowContent] = React.useState(showContentAuto);
    const [showContentDisappear, setShowContentDisappear] = React.useState(!showContentAuto);
    const [startTime, setStartTime] = React.useState(0);
    const [nextIteration, setNextIteration] = React.useState(0);
    const elementRef = React.useRef<HTMLDivElement>(null);
    let timerControl:NodeJS.Timeout | undefined;

    const codeWrapperPrefix = displayCodeWrapper ? `<div class="animated-text-writer-code-container ${displayCodeLineNumber ? '' : 'hide-line-number'} ${displayCodeLineNumberMax ? 'n'+displayCodeLineNumberMax : ''} ${codeWrapperWhiteSpace === 'auto' ? (displayCodeLineNumber ? 'nowrap' : '' ) : (codeWrapperWhiteSpace === 'nowrap' ? 'nowrap' : '')} ${codeWrapperClasses}" style="${codeWrapperStyle}">` : '';
    const codeWrapperSuffix = displayCodeWrapper ? '</div>' : '';
    const cursorContent = `<span class="animated-text-writer-blinking-cursor" style="color: ${cursorColor}; line-height: ${cursorLineHeight}">𝙸</span>`;


    React.useEffect(() => {
        const currentMillis = new Date().getTime();
        if (startTime === 0) {
            setCurrentContent(cursorContent);
            setStartTime(currentMillis);
        }

        if (startTime + startDelay > currentMillis) {
            if (enabled) {
                setTimeout(() => {
                    setNextIteration(nextIteration+1);
                }, delay);
            }
            return;
        }

        setCurrentContent(prefix + (nextIteration === 0 ? replacablePrefix : '') + codeWrapperPrefix + codePrefix + (content.length && currentIndex < content.length ? content.substring(0, currentIndex) + (displayCursor && enabled ? cursorContent : '') : '') + codeSuffix + codeWrapperSuffix + suffix);
        if (currentIndex < content.length) {
            const increment = getIncrement(content, currentIndex);

            setTimeout(() => {
                setCurrentIndex(currentIndex + increment);
            }, delay);
        } else {
            setCurrentContent(prefix + codeWrapperPrefix + codePrefix + content + (displayCursorEnd ? cursorContent : '') + codeSuffix + codeWrapperSuffix + suffix);
        }
    }, [
            nextIteration, currentIndex, enabled,
            startTime,
            startDelay,
            prefix,
            replacablePrefix,
            codeWrapperPrefix,
            codePrefix,
            content,
            displayCursor,
            cursorContent,
            codeSuffix,
            codeWrapperSuffix,
            suffix,
            delay,
            displayCursorEnd
        ]
    );


    const clickMoreLessButton = () => {
        if (displayFullContentOnClickMoreButton) {
            if (!showContent) {
                setShowContentDisappear(false);
                setShowContent(true);
                if (timerControl) {
                    clearTimeout(timerControl);
                }
            } else {
                document.documentElement.style.setProperty('--client-height', elementRef.current!.clientHeight + 'px');
                setShowContentDisappear(true);
                timerControl = setTimeout(() => {
                    setShowContent(false);
                    setShowContentDisappear(false);
                }, 1800);
            }
        } else {
            setEnabled(true);
        }
    }

    return (
        <div className={className} style={sx}>
            {enabled && (<div dangerouslySetInnerHTML={{__html: currentContent}} />)}
            {!enabled && (
            <h4 className={clickMoreHeaderClassString} onClick={clickMoreLessButton} style={{ cursor: 'pointer' }}>
                {clickMoreHeaderText}
                <button className='displayMoreButton buttonButton'
                    onClick={clickMoreLessButton}
                >
                    <span className={`buttonText ${showContent ? 'showLess' : 'showMore'}`} >{showContent ? viewLessButtonText : viewMoreButtonText}</span>
                    <div className="bouncingDotAnimation"> <div></div><div></div> <div></div> </div>
                </button>
            </h4>
            )}
            {displayFullContentOnClickMoreButton && showContent && (<div ref={elementRef} style={{ animation: showContentDisappear ? 'showly-disappear 2s ease' : 'showly-appear 2s ease', overflow: 'hidden', marginTop: '-2px' }} dangerouslySetInnerHTML={{__html: content}} />)}
        </div>
    );
};

export default AnimatedTextWriter;