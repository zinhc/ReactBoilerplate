var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    it('should set state to started and countdown' , (done) => {//加done是為了asynchrons
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001)
    });

      it('should never set count less than zero' , (done) => {//加done是為了asynchrons
        var countdown = TestUtils.renderIntoDocument(<Countdown />);
        countdown.handleSetCountdown(1);

        setTimeout(() => {
          expect(countdown.state.count).toBe(0);
          done();
        }, 3001)
    });
    it('should pause countdown on paused status', (done) => {//加done是為了asynchrons
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('paused');

      setTimeout(() => {
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should reset count on stopped', (done) => {//加done是為了asynchrons
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('stopped');

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);//到0秒時出現stop
        expect(countdown.state.countdownStatus).toBe('stopped');
        done();
      }, 1001);
    });

  });
});