import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { interval, Subject, fromEvent } from 'rxjs';
import { takeUntil, buffer, debounceTime, map, filter } from 'rxjs/operators';
import defaultImage from '../../image/timer.png';
import styles from '../App/App.module.css';

function App() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState('stopTimer');
  const image = defaultImage;

  useEffect(() => {
    const unsubscribes = new Subject();

    const timer = interval(1000);

    timer.pipe(takeUntil(unsubscribes)).subscribe(() => {
      if (start === 'startTimer') {
        setTime(prevState => prevState + 1000);
      }
    });
    return () => {
      unsubscribes.next();
      unsubscribes.complete();
    };
  }, [start]);

  const stopTimer = () => {
    setStart('stopTimer');
    setTime(0);
  };

  const wait = useRef(null);

  useEffect(() => {
    const waitObservers = fromEvent(wait.current, 'click');
    const bufferTimes = waitObservers.pipe(debounceTime(300));
    const clicks = waitObservers.pipe(
      buffer(bufferTimes),
      map(clicks => {
        return clicks.length;
      }),
      filter(clickFinish => clickFinish === 2),
    );

    const clickSubscribes = clicks.subscribe(() => {
      setStart('waitTimer');
    });

    return () => clickSubscribes.unsubscribes();
  }, []);

  return (
    <>
      <img src={image} alt="timer" width="700" />
      <div className={styles.container}>
        <h1 className={styles.title}>Timer</h1>
        <div>
          <span className={styles.timer}>
            "{new Date(time).toISOString().slice(11, 19)}"
          </span>
        </div>
        <div className={styles.div}>
          <button
            className={styles.button}
            onClick={() => setStart('startTimer')}
          >
            Start
          </button>
          <button className={styles.button} onClick={() => stopTimer()}>
            Stop
          </button>
          <button className={styles.button} ref={wait}>
            Wait
          </button>
          <button className={styles.button} onClick={() => setTime(0)}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
