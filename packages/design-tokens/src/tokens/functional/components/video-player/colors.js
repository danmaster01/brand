module.exports = {
  brand: {
    videoPlayer: {
      playButton: {
        bgColor: {
          rest: {
            value: 'var(--base-color-scale-blue-5)',
            dark: 'var(--base-color-scale-blue-5)',
          },
        },
        fgColor: {
          rest: {
            value: 'var(--base-color-scale-gray-0)',
            dark: 'var(--base-color-scale-gray-0)',
          },
        },
      },
      title: {
        bgColor: {
          value: 'linear-gradient(180deg, rgba(0,0,0,0.9), rgba(0,0,0,0.45) 66%, transparent)',
          dark: 'linear-gradient(180deg, rgba(0,0,0,0.9), rgba(0,0,0,0.45) 66%, transparent)',
        },
        fgColor: {
          value: 'var(--base-color-scale-gray-0)',
          dark: 'var(--base-color-scale-gray-0)',
        },
      },
      controls: {
        bgColor: {
          value: 'rgba(0,0,0,0.75)',
          dark: 'rgba(0,0,0,0.75)',
        },
        fgColor: {
          value: 'var(--base-color-scale-gray-0)',
          dark: 'var(--base-color-scale-gray-0)',
        },
      },
      closedCaption: {
        bgColor: {
          enabled: {
            value: 'var(--base-color-scale-gray-0)',
            dark: 'var(--base-color-scale-gray-0)',
          },
        },
        fgColor: {
          enabled: {
            value: 'var(--base-color-scale-black-0)',
            dark: 'var(--base-color-scale-black-0)',
          },
          disabled: {
            value: 'var(--base-color-scale-gray-0)',
            dark: 'var(--base-color-scale-gray-0)',
          },
        },
        borderColor: {
          enabled: {
            value: 'var(--base-color-scale-gray-0)',
            dark: 'var(--base-color-scale-gray-0)',
          },
        },
      },
      range: {
        bgColor: {
          default: {
            value: 'var(--base-color-scale-gray-0)',
            dark: 'var(--base-color-scale-gray-0)',
          },
          progress: {
            value: 'var(--base-color-scale-blue-4)',
            dark: 'var(--base-color-scale-blue-4)',
          },
        },
      },
    },
  },
}
